'use client'
import { useRouter } from 'next/navigation'

const CloseForm = () => {
  const router = useRouter()

  return (
    <button
      className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
      type='button'
      onClick={router.back}
    >
      ✕
    </button>
  )
}

export default CloseForm
