import FormTracking from '@/components/FormTracking'
import { handleSubmit } from '@/app/admin/tracking/server/actions'

const CreateTracking = () => {
  return (
    <div className='min-w-full h-full'>
      <h1 className='text-4xl text-center font-bold mt-4'>Create Shipment Information</h1>
      <FormTracking handleSubmit={handleSubmit} />
    </div>
  )
}

export default CreateTracking
