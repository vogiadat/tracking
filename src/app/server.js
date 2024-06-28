'use server'

import { redirect } from 'next/navigation'
import { resetCache } from './admin/tracking/cache/api'

export const handleSubmit = async (data) => {
  const trackingId = data.get('trackingId')
  resetCache(true)
  return redirect(`/tracking/${trackingId}`)
}
