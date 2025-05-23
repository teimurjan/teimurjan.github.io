'use client'

import { useJobApplications } from '@/db/queries'
import { JobApplicationsTable } from '../job-applications-table/job-applications-table'

interface Props {
  className?: string
}

export const JobApplications = ({ className }: Props) => {
  const { data: jobApplications = [], isLoading } = useJobApplications()
  return (
    <JobApplicationsTable
      className={className}
      jobApplications={jobApplications}
      loading={isLoading}
      search
      selectable
      footer
    />
  )
}
