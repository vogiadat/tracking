import { getTrackingItems } from './cache/api'
import CardCreate from './card-create'
import FormTrackingItem from './form-tracking-item'
import { handleSubmit } from './server/action'
import TrackingItem from './tracking-item'

const Page = async ({ params, searchParams }) => {
  const { isOpenFormCreate, trackingItemId } = searchParams
  const { isOk, trackingItems } = await getTrackingItems(params.id)
  const openForm = isOpenFormCreate || trackingItemId

  return (
    <div className='w-full container h-full mt-4'>
      {isOk ? (
        <div>
          <div className='grid gap-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
            <CardCreate trackingId={params.id} />
            {trackingItems.map((trackingItem) => (
              <TrackingItem {...trackingItem} key={trackingItem.id} />
            ))}
          </div>

          <dialog id='my_modal_3' className='modal' open={openForm}>
            <div className='modal-box min-w-[700px]'>
              {openForm && (
                <FormTrackingItem
                  id={trackingItemId}
                  handleSubmit={handleSubmit}
                  trackingId={params.id}
                />
              )}
            </div>
          </dialog>
        </div>
      ) : (
        <div role='alert' className='alert alert-error'>
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
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      )}
    </div>
  )
}
export default Page
