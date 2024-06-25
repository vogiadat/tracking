import { handleSubmit } from '@/app/admin/tracking/server/actions'
import FormTracking from '@/components/FormTracking'

const UpdateTracking = ({ params }) => {
  return (
    <div className='min-w-full h-full'>
      <h1 className='text-4xl text-center font-bold mt-8'>Update Shipment Information</h1>
      <FormTracking handleSubmit={handleSubmit} trackingId={params.id} />
    </div>
  )
}

export default UpdateTracking
