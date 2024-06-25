'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const ButtonDelete = ({ customClassName = '' }) => {
  const { pending } = useFormStatus()

  return (
    <button className={`btn btn-active btn-error ${customClassName}`} disabled={pending}>
      {pending ? <span className='loading loading-spinner'></span> : 'Confirm'}
    </button>
  )
}

export default ButtonDelete
