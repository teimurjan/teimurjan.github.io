'use client'

import { useJobApplications } from '@/db/db'
import { JobApplicationsTable } from './job-applications-table'

interface Props {
  className?: string
}

export const AllJobApplications = ({ className }: Props) => {
  const jobApplications = useJobApplications()
  return (
    <JobApplicationsTable
      className={className}
      jobApplications={jobApplications}
    />
  )
}
