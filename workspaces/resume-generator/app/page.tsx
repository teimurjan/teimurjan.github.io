import { AllJobApplications } from '@/components/custom/all-job-applications'

const Home = async () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <h4>Your job applications</h4>
      <AllJobApplications className="flex-1" />
    </div>
  )
}

export default Home
