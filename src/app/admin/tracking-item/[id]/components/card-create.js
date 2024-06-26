'use client'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const CardCreate = ({ trackingId }) => {
  const router = useRouter()

  const handleNavigate = () => {
    router.push('?isOpenFormCreate=true')
  }

  return (
    <div
      className='card text-neutral-content  border-dashed border-2 cursor-pointer'
      onClick={handleNavigate}
    >
      <div className='card-body items-center justify-center text-center h-max'>
        <Plus />
      </div>
    </div>
  )
}

export default CardCreate
