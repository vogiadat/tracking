'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const DeleteButton = () => {
  const { pending } = useFormStatus()

  return (
    <button className={`btn btn-active btn-error`} disabled={pending}>
      {pending ? <span className='loading loading-spinner'></span> : 'Confirm'}
    </button>
  )
}

export default DeleteButton
