'use client'

import { useJobApplications } from '@/db/queries'
import { JobApplicationsTable } from '../job-applications-table/job-applications-table'
import { useMemo } from 'react'

interface Props {
  className?: string
}

export const RecentJobApplications = ({ className }: Props) => {
  const { data: jobApplications = [], isLoading } = useJobApplications()
  const slicedJobApplications = useMemo(
    () => jobApplications.slice(0, 5),
    [jobApplications],
  )
  return (
    <JobApplicationsTable
      className={className}
      jobApplications={slicedJobApplications}
      loading={isLoading}
    />
  )
}
