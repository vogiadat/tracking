import { setFlash } from '@/components/flash-toaster'
import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import CardCreate from './card-create'
import TrackingItem from './tracking-item'
import FormTrackingItem from './form-tracking-item'
import { compileURL } from '@/config/const'

const Page = async ({ params, searchParams }) => {
  const { isOpenFormCreate, trackingItemId } = searchParams

  const url = compileURL(`/api/tracking-item/tracking/${params.id}`)
  const res = await fetch(url, { next: { tags: [`tracking-item`] } })

  const trackingItems = await res.json()

  const handleSubmit = async (formData) => {
    'use server'

    const isUpdate = !!trackingItemId

    const rawFormData = {
      title: formData.get('title'),
      location: formData.get('location'),
      status: formData.get('status')
    }

    const requestUrl = isUpdate ? compileURL(`/api/tracking-item/${trackingItemId}`) : url

    const res = await fetch(requestUrl, {
      method: isUpdate ? 'PATCH' : 'POST',
      body: JSON.stringify(rawFormData)
    })

    await res.json()

    setFlash({ type: 'success', message: 'success' })
    revalidateTag(`tracking-item-${trackingItemId}`)
    revalidateTag('tracking-item')

    redirect(`/admin/tracking-item/${params.id}`)
  }

  return (
    <div className='w-full container h-full mt-4'>
      {res.ok ? (
        <div>
          <div className='grid gap-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
            <CardCreate trackingId={params.id} />
            {trackingItems.map((trackingItem) => (
              <TrackingItem {...trackingItem} key={trackingItem.id} />
            ))}
          </div>

          <dialog id='my_modal_3' className='modal' open={!!isOpenFormCreate || !!trackingItemId}>
            <div className='modal-box min-w-[700px]'>
              {isOpenFormCreate && <FormTrackingItem handleSubmit={handleSubmit} />}
              {trackingItemId && (
                <FormTrackingItem id={trackingItemId} handleSubmit={handleSubmit} />
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
