import { getTrackingById } from '@/app/actions/tracking'
import Form from '@/components/Form'
export const revalidate = 1
const UpdateTracking = async ({ params }) => {
  const { trackingNumber } = params
  const data = await getTrackingById(trackingNumber)

  return (
    <div className='min-w-full'>
      <Form packageData={data} />
    </div>
  )
}

export default UpdateTracking
