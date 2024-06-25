import { Plus } from 'lucide-react'
import { getTrackingItem } from './cache/api'
import { CloseForm, ButtonSubmit } from '@/components/ui/form'

const FromTrackingItem = async ({ handleSubmit, id, trackingId }) => {
  let defaultValue = {}

  if (id) {
    defaultValue = await getTrackingItem(id)
  }

  const { status, location, title } = defaultValue

  return (
    <form action={handleSubmit}>
      <CloseForm id={id} />
      <h3 className='font-bold text-lg mb-4'>New Deriver!</h3>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-3'>
          <input name='id' value={id} hidden />
          <input name='trackingId' value={trackingId} hidden />

          <input
            type='text'
            name='title'
            defaultValue={title}
            placeholder='Title'
            className='input input-bordered w-full max-w-xs'
          />
          <input
            name='location'
            defaultValue={location}
            type='text'
            placeholder='Location(address)'
            className='input input-bordered w-full max-w-xs'
          />
          <input
            name='status'
            defaultValue={status}
            type='text'
            placeholder='Status'
            className='input input-bordered w-full max-w-xs'
          />
        </div>
        <label className='border border-dashed rounded cursor-pointer flex items-center justify-center flex-col'>
          <h6>Select Image</h6>
          <div>
            <Plus className='w-10' />
          </div>
          <input
            type='file'
            className='file-input file-input-bordered file-input-success w-full max-w-xs hidden'
          />
        </label>
      </div>

      <div className='mt-6 '>
        <ButtonSubmit customClassName='w-full' />
      </div>
    </form>
  )
}

export const dynamic = 'force-dynamic'

export default FromTrackingItem
