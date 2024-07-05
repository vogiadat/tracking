'use server'
import { compileURL } from '@/config/const'
import { revalidateTag, unstable_cache } from 'next/cache'

const CACHE_KEY_TRACKINGS = 'list-tracking-api'
const CACHE_KEY_GET_TRACKINGS = 'CACHE_KEY_GET_TRACKING'
const CACHE_KEY_DETAIL_TRACKING = 'CACHE_KEY_DETAIL_TRACKING'
const CACHE_KEY_DETAIL_TRACKING_GET_ITEM = 'CACHE_KEY_DETAIL_TRACKING_GET_ITEM'

export const getTrackings = unstable_cache(
  async () => {
    const url = compileURL('/api/tracking')
    console.log({ urlGetTracking: url })

    const res = await fetch(url)
    return {
      isOk: res.ok,
      trackings: await res.json()
    }
  },
  [CACHE_KEY_TRACKINGS],
  { tags: [CACHE_KEY_GET_TRACKINGS] }
)

export const getDetailTracking = unstable_cache(
  async (trackingNumber) => {
    const url = compileURL(`/api/tracking/${trackingNumber}`)
    const res = await fetch(url)
    return (await res.json()) || {}
  },
  [CACHE_KEY_DETAIL_TRACKING],
  { tags: [CACHE_KEY_DETAIL_TRACKING_GET_ITEM] }
)

export const resetCache = (isUpdate = false) => {
  revalidateTag(CACHE_KEY_GET_TRACKINGS)
  isUpdate && revalidateTag(CACHE_KEY_DETAIL_TRACKING_GET_ITEM)
}
