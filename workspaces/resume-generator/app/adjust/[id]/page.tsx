import { AdjustByIdForm } from '@/components/custom/adjust-by-id-form'

const AdjustById = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return <AdjustByIdForm id={id} />
}

export default AdjustById
