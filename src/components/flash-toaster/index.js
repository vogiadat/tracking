import { cookies } from 'next/headers'
import { Toaster } from 'sonner'
import FlashToasterClient from './flash-toaster-client'
import { v4 as uuidv4 } from 'uuid'

export function setFlash(flash) {
  cookies().set('flash', JSON.stringify({ ...flash, uuid: uuidv4() }), {
    path: '/',
    expires: new Date(Date.now() + 1000)
  })
}

export function FlashToaster() {
  const flash = cookies().get('flash')
  return (
    <>
      <Toaster richColors />
      <FlashToasterClient flash={flash?.value} />
    </>
  )
}
