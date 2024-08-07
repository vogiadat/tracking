'use server'

import { setFlash } from '@/components/flash-toaster'
import { compileURL } from '@/config/const'
import { redirect } from 'next/navigation'
import { resetCache } from '@/app/admin/tracking/cache/api'

export const handleSubmit = async (formData) => {
  const id = formData.get('id')

  const rawFormData = {
    trackingNumber: formData.get('trackingNumber'),
    from: formData.get('from'),
    to: formData.get('to'),
    dateSend: formData.get('dateSend'),
    estimateReceivedDay: formData.get('estimateReceivedDay'),
    services: formData.get('services'),
    terms: formData.get('terms'),
    packaging: formData.get('packaging'),
    totalPackage: formData.get('totalPackage')
  }

  const requestUrl = id ? compileURL(`/api/tracking/${id}`) : compileURL(`/api/tracking/create`)
  const method = id ? 'PATCH' : 'POST'

  console.log({ requestUrl })

  const res = await fetch(requestUrl, {
    method,
    body: JSON.stringify(rawFormData)
  })

  await res.json()

  setFlash({ type: 'success', message: 'success' })
  resetCache(!!id)
  redirect(`/admin/tracking`)
}

export const handleDelete = async (formData) => {
  const id = formData.get('id')

  const requestUrl = compileURL(`/api/tracking/${id}`)
  const method = 'DELETE'

  console.log(requestUrl)

  const res = await fetch(requestUrl, {
    method
  })

  console.log({ res })

  setFlash({ type: 'success', message: 'success' })
  resetCache(false)

  redirect('/admin/tracking')
}
