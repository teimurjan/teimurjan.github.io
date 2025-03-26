'use client'

import { useJobApplications } from '@/db/queries'
import { JobApplicationsTable } from './job-applications-table'

interface Props {
  className?: string
}

export const AllJobApplications = ({ className }: Props) => {
  const { data: jobApplications = [], isLoading } = useJobApplications()
  return (
    <JobApplicationsTable
      className={className}
      jobApplications={jobApplications}
      loading={isLoading}
    />
  )
}
