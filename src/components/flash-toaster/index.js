import { cookies } from 'next/headers'
import { Toaster } from 'sonner'
import FlashToasterClient from './flash-toaster-client'

export function setFlash(flash) {
  cookies().set('flash', JSON.stringify(flash), {
    path: '/',
    expires: new Date(Date.now() + 10 * 1000)
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
