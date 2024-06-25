'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const ButtonSubmit = ({ customClassName = '' }) => {
  const { pending } = useFormStatus()
  return (
    <button className={`btn btn-active btn-neutral ${customClassName}`} disabled={pending}>
      {pending ? <span className='loading loading-spinner'></span> : 'Save'}
    </button>
  )
}

export default ButtonSubmit
