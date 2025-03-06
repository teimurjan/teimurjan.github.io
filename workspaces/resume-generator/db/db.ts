import { ResumeQuery } from '@teimurjan/gql-client'
import { Dexie, type EntityTable } from 'dexie'
import { useLiveQuery } from 'dexie-react-hooks'

export type JobApplication = {
  id?: number
  resume: ResumeQuery
  coverLetter: string
  jobDescription: string
  createdAt: Date
}

const db = new Dexie('ResumeGeneratorDatabase') as Dexie & {
  jobApplications: EntityTable<JobApplication, 'id'>
}

db.version(1).stores({
  jobApplications: '++id',
})

export const useJobApplications = () => {
  return useLiveQuery(() => db.jobApplications.toArray())
}

export const useAddJobApplication = () => {
  return (data: JobApplication) => db.jobApplications.add(data)
}

export const useRemoveJobApplication = () => {
  return (id: number) => db.jobApplications.delete(id)
}
