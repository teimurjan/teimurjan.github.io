'use client'

import { useJobApplications } from '@/db/queries'
import { JobApplicationsTable } from './job-applications-table'

interface Props {
  className?: string
}

export const RecentJobApplications = ({ className }: Props) => {
  const { data: jobApplications = [], isLoading } = useJobApplications()
  return (
    <JobApplicationsTable
      className={className}
      jobApplications={jobApplications.slice(0, 5)}
      loading={isLoading}
    />
  )
}
