import { getTrackingItem } from '../cache/api'
import { ButtonCancel, CloseForm, ButtonDelete } from '@/components/ui/form'
import { handleDelete } from '../server/action'

const FormDelete = async ({ id, trackingId }) => {
  let defaultValue = {}

  if (id) {
    defaultValue = await getTrackingItem(id)
  }

  return (
    <form action={handleDelete}>
      <CloseForm id={id} />
      <input name='id' defaultValue={id} hidden />
      <input name='trackingId' defaultValue={trackingId} hidden />

      <h3 className='font-bold text-lg mb-4'>Delete!</h3>
      <div role='alert' className='alert alert-warning'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 shrink-0 stroke-current'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
          />
        </svg>
        <span>
          Warning:
          <br />
          Do you want to delete delivery status with Title: {defaultValue.title}!
        </span>
      </div>
      <div className='mt-6 flex justify-end gap-2'>
        <ButtonCancel />
        <ButtonDelete />
      </div>
    </form>
  )
}

export const dynamic = 'force-dynamic'

export default FormDelete
