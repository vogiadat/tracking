import { revalidateTag, unstable_cache } from 'next/cache'
import {
  CACHE_KEY_GET_ALL_TRACKING,
  CACHE_KEY_TRACKING,
  CACHE_KEY_TRACKING_ITEM,
  CACHE_KEY_TRACKING_ITEM_GET_ITEM
} from './const'

const { compileURL } = require('@/config/const')

export const getTrackingItem = unstable_cache(
  async (id) => {
    const url = compileURL(`/api/tracking-item/${id}`)
    const res = await fetch(url)
    return (await res.json()) || {}
  },
  [CACHE_KEY_TRACKING_ITEM],
  { tags: [CACHE_KEY_TRACKING_ITEM_GET_ITEM] }
)

export const getTrackingItems = unstable_cache(
  async (id) => {
    const url = compileURL(`/api/tracking-item/tracking/${id}`)
    const res = await fetch(url)
    return {
      isOk: res.ok,
      trackingItems: await res.json()
    }
  },
  [CACHE_KEY_TRACKING],
  { tags: [CACHE_KEY_GET_ALL_TRACKING] }
)

export const resetCache = (isUpdate = false) => {
  revalidateTag(CACHE_KEY_GET_ALL_TRACKING)
  isUpdate && revalidateTag(CACHE_KEY_TRACKING_ITEM_GET_ITEM)
}
