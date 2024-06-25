'use client'
import { useEffect } from 'react'
import { toast } from 'sonner'

const FlashToasterClient = (props) => {
  useEffect(() => {
    if (!!props.flash) {
      const { type, message } = JSON.parse(props.flash)
      type === 'loading' ? toast.loading() : toast.dismiss()
      if (type === 'success') {
        toast.success(message)
      } else if (type === 'error') {
        toast.error(message)
      }
    }
  }, [props.flash])

  return null
}

export default FlashToasterClient
