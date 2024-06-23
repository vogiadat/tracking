import { catching } from '@/config/const'

export const getTrackingById = async (trackingNumber) => {
  const res = await fetch(`http://localhost:3000/api/tracking/${trackingNumber}`, {
    next: { tags: [catching.GET_TRACKING_BY_ID] }
  })
  return await res.json()
}
