import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  orderBy,
  updateDoc,
} from 'firebase/firestore'
import { db } from './db'
import type { JobApplication } from './db'

const queryKeys = {
  jobApplications: ['jobApplications'] as const,
  jobApplication: (id: string) => ['jobApplications', id] as const,
}

export const useJobApplications = () => {
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
  })
}

export const useJobApplication = (id: string) => {
  return useQuery({
    queryKey: queryKeys.jobApplication(id),
    queryFn: async () => {
      const docRef = doc(db, 'jobApplications', id)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) return null
      return {
        id: docSnap.id,
        ...(docSnap.data() as Omit<JobApplication, 'id'>),
      }
    },
  })
}

export const useAddJobApplication = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: JobApplication) => {
      const { id, ...rest } = data
      const docRef = await addDoc(collection(db, 'jobApplications'), rest)
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
