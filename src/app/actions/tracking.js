'use server'
import { catching } from '@/config/const'

export const getTrackingById = async (trackingNumber) => {
  const res = await fetch(process.env.TRACKING_ENV + `/api/tracking/${trackingNumber}`, {
    next: { tags: [catching.GET_TRACKING_BY_ID] }
  })
  return await res.json()
}

export const fetchTracking = async () => {
  const res = await fetch(process.env.TRACKING_ENV + 'http://localhost:3000/api/tracking', {
    next: { tags: [catching.GET_TRACKING_BY_ID] }
  })
  return await res.json()
}
