import { Suspense } from 'react'
import { getTrackingItems } from './cache/api'
import CardCreate from './components/card-create'
import FormDelete from './components/form-delete'
import FormTrackingItem from './components/form-tracking-item'
import { handleSubmit } from './server/action'
import TrackingItem from './components/tracking-item'
import Loading from './components/loading'
import { TrackingList } from '@/components/tracking'

const Page = async ({ params, searchParams }) => {
  const { isOpenFormCreate, trackingItemId, isOpenFormDelete } = searchParams
  const { isOk, trackingItems } = await getTrackingItems(params.id)

  const isExistList = trackingItems.length > 0

  const openDelete = isOpenFormDelete && trackingItemId
  const openCreate = isOpenFormCreate
  const openUpdate = trackingItemId && !isOpenFormDelete

  const open = openDelete || openCreate || openUpdate

  return (
    <div className='w-full container h-full mt-4'>
      {isOk ? (
        <div className='grid gap-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
          <div
            className={`${isExistList ? 'col-span-3' : 'col-span-full'} grid gap-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2`}
          >
            <CardCreate trackingId={params.id} />
            {trackingItems.map((trackingItem) => (
              <TrackingItem {...trackingItem} key={trackingItem.id} />
            ))}
          </div>

          <div className={isExistList ? 'col-span-1' : ''}>
            <TrackingList data={trackingItems} />
          </div>

          <dialog id='my_modal_3' className='modal' open={open}>
            <div className='modal-box min-w-[700px]'>
              {(openCreate || openUpdate) && (
                <Suspense fallback={<Loading />}>
                  <FormTrackingItem
                    id={trackingItemId}
                    handleSubmit={handleSubmit}
                    trackingId={params.id}
                  />
                </Suspense>
              )}

              {openDelete && (
                <Suspense fallback={<Loading />}>
                  <FormDelete trackingId={params.id} id={trackingItemId} />
                </Suspense>
              )}
            </div>
          </dialog>
        </div>
      ) : (
        <div role='alert' className='alert'>
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
          <span>
            <span className='text-error font-extrabold'>Error: </span>
            Not found List Delivery of
            <span className='badge badge-error mx-1'>{params.id}</span>.
          </span>
        </div>
      )}
    </div>
  )
}
export default Page
