'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchInput = () => {
  const router = useRouter()
  const [trackingId, setTrackingId] = useState('')

  const handleChangeInput = (e) => {
    setTrackingId(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    return router.push(`/tracking/${trackingId}`)
  }

  return (
    <form className='' onSubmit={handleSubmit}>
      <label className='input input-bordered input-accent flex items-center gap-2 '>
        <input
          type='text'
          value={trackingId}
          className='grow text-zinc-700'
          placeholder='Input Your Tracking Number'
          onChange={handleChangeInput}
        />
        <button type='submit' className='btn btn-sm btn-accent text-base-100'>
          Tracking
        </button>
      </label>
    </form>
  )
}

export default SearchInput
