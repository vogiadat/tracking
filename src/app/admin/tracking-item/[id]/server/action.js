'use server'

import { setFlash } from '@/components/flash-toaster'
import { compileURL } from '@/config/const'
import { resetCache } from '../cache/api'
import { redirect } from 'next/navigation'

export const handleSubmit = async (formData) => {
  const id = formData.get('id')
  const trackingId = formData.get('trackingId')

  const rawFormData = {
    title: formData.get('title'),
    location: formData.get('location'),
    status: formData.get('status')
  }

  const requestUrl = id
    ? compileURL(`/api/tracking-item/${id}`)
    : compileURL(`/api/tracking-item/tracking/${trackingId}`)

  const method = id ? 'PATCH' : 'POST'

  const res = await fetch(requestUrl, {
    method,
    body: JSON.stringify(rawFormData)
  })

  await res.json()

  setFlash({ type: 'success', message: 'success' })
  resetCache(!!id)
  redirect(`/admin/tracking-item/${trackingId}`)
}
