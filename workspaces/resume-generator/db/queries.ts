import { db } from '@/firebase/firestore'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'
import React from 'react'
import type { JobApplication } from './types'

const queryKeys = {
  jobApplications: ['jobApplications'] as const,
  jobApplication: (id: string) => ['jobApplications', id] as const,
}

export const useJobApplicationsSubscription = () => {
  const queryClient = useQueryClient()

  React.useEffect(() => {
    const jobAppsCollection = collection(db, 'jobApplications')
    const q = query(jobAppsCollection, orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const jobApplications = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<JobApplication, 'id'>),
      }))
      queryClient.setQueryData(queryKeys.jobApplications, jobApplications)
    })

    return () => unsubscribe()
  }, [queryClient])
}

export const useJobApplications = () => {
  useJobApplicationsSubscription()
  return useQuery({
    queryKey: queryKeys.jobApplications,
    queryFn: async () => {
      const jobAppsCollection = collection(db, 'jobApplications')
      const q = query(jobAppsCollection, orderBy('createdAt', 'desc'))
      const snapshot = await getDocs(q)
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<JobApplication, 'id'>),
      }))
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: Number.POSITIVE_INFINITY,
  })
}

export const useJobApplicationSubscription = (id: string) => {
  const queryClient = useQueryClient()

  React.useEffect(() => {
    const docRef = doc(db, 'jobApplications', id)

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (!docSnap.exists()) {
        queryClient.setQueryData(queryKeys.jobApplication(id), null)
        return
      }
      const jobApplication = {
        id: docSnap.id,
        ...(docSnap.data() as Omit<JobApplication, 'id'>),
      }
      queryClient.setQueryData(queryKeys.jobApplication(id), jobApplication)
    })

    return () => unsubscribe()
  }, [id, queryClient])
}

export const useJobApplication = (id: string) => {
  useJobApplicationSubscription(id)
  return useQuery({
    queryKey: queryKeys.jobApplication(id),
    queryFn: async () => {
      const docRef = doc(db, 'jobApplications', id)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        return null
      }
      return {
        id: docSnap.id,
        ...(docSnap.data() as Omit<JobApplication, 'id'>),
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: Number.POSITIVE_INFINITY,
  })
}

export const useAddJobApplication = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: Omit<JobApplication, 'status' | 'createdAt'>) => {
      const { id, ...rest } = data
      const docRef = await addDoc(collection(db, 'jobApplications'), {
        ...rest,
        createdAt: Timestamp.now(),
      })
      return docRef.id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.jobApplications })
    },
  })
}

export const useUpdateJobApplication = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string
      data: Partial<JobApplication>
    }) => {
      const docRef = doc(db, 'jobApplications', id)
      await updateDoc(docRef, data)
    },
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.jobApplications })
      queryClient.invalidateQueries({ queryKey: queryKeys.jobApplication(id) })
    },
  })
}
export const useRemoveJobApplication = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: string) => {
      await deleteDoc(doc(db, 'jobApplications', id))
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.jobApplications })
      queryClient.invalidateQueries({ queryKey: queryKeys.jobApplication(id) })
    },
  })
}

export const useRemoveJobApplications = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (ids: string[]) => {
      await Promise.all(ids.map((id) => deleteDoc(doc(db, 'jobApplications', id))))
    },
    onSuccess: (_, ids) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.jobApplications })
      ids.forEach((id) => {
        queryClient.invalidateQueries({
          queryKey: queryKeys.jobApplication(id),
        })
      })
    },
  })
}
