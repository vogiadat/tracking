'use client'
import { useRouter } from 'next/navigation'

const ButtonCancel = () => {
  const router = useRouter()

  return (
    <button className='btn' type='button' onClick={router.back}>
      Cancel
    </button>
  )
}

export default ButtonCancel
