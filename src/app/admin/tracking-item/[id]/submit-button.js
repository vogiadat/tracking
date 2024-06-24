'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button className={`btn w-full btn-active btn-neutral`} disabled={pending}>
      {pending ? <span className='loading loading-spinner'></span> : 'Save'}
    </button>
  )
}

export default SubmitButton
