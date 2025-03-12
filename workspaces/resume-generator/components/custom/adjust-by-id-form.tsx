'use client'
import { AdjustForm } from '@/components/custom/adjust-form'
import { useJobApplication } from '@/db/db'

interface Props {
  id: string
}

const AdjustByIdForm = ({ id }: Props) => {
  const application = useJobApplication(id)

  if (!application) {
    return null
  }

  return <AdjustForm data={application.resume} />
}

export default AdjustByIdForm
