'use server'

import { setFlash } from '@/components/flash-toaster'
import { compileURL } from '@/config/const'
import { resetCache } from '../cache/api'
import { redirect } from 'next/navigation'
import { writeFile } from 'fs/promises'
import { v4 as uuid } from 'uuid'
import path from 'path'

export const handleSubmit = async (formData) => {
  const id = formData.get('id')
  const trackingId = formData.get('trackingId')
  const file = formData.get('image')
  const image = await handleUpload(file)

  const rawFormData = {
    title: formData.get('title'),
    location: formData.get('location'),
    status: formData.get('status'),
    image
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

export const handleDelete = async (formData) => {
  const id = formData.get('id')
  const trackingId = formData.get('trackingId')

  const requestUrl = compileURL(`/api/tracking-item/${id}`)
  const method = 'DELETE'

  await fetch(requestUrl, {
    method
  })

  setFlash({ type: 'success', message: 'success' })
  resetCache(false)

  redirect(`/admin/tracking-item/${trackingId}`)
}

const handleUpload = async (file) => {
  const image = await file.arrayBuffer()
  const buffer = new Uint8Array(image)
  const filename = '/upload/' + uuid()
  await writeFile(path.join(process.cwd(), 'public', filename), buffer)
  return filename
}
