'use client'
import { useRouter } from 'next/navigation'

const ButtonCancel = ({ customClassName = '' }) => {
  const router = useRouter()

  return (
    <button className={`btn ${customClassName}`} type='button' onClick={router.back}>
      Cancel
    </button>
  )
}

export default ButtonCancel
