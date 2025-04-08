import { JobApplications } from '@/components/widgets/job-applications/job-applications'

const Home = async () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <h4>Your job applications</h4>
      <JobApplications className="flex-1" />
    </div>
  )
}

export default Home
