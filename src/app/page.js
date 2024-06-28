import SearchInput from '@/components/SearchInput'
import { redirect } from 'next/navigation'
import { resetCache } from './admin/tracking/cache/api'

const Page = async () => {
  const handleSubmit = async (data) => {
    'use server'

    const trackingId = data.get('trackingId')
    resetCache(true)
    return redirect(`/tracking/${trackingId}`)
  }

  return (
    <>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Tracking Your Delivery</h1>
          <SearchInput handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  )
}

export default Page
