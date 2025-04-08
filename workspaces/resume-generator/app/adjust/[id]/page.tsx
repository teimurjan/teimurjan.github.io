import { AdjustApplication } from '@/components/widgets/adjust-application/adjust-application'

const AdjustById = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return <AdjustApplication id={id} />
}

export default AdjustById
