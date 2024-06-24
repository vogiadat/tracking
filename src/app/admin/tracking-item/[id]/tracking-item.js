import Link from 'next/link'
import React from 'react'

const TrackingItem = ({ status, location, createdAt, id }) => {
  return (
    <div className='card bg-neutral text-neutral-content'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{status || 'no update'}</h2>
        <p>location: {location || 'no update'}</p>
        <div className='card-actions justify-end'>
          <Link href={{ query: { trackingItemId: id } }} className='btn btn-primary'>
            Update
          </Link>
          <button className='btn btn-ghost'>Deny</button>
        </div>
      </div>
    </div>
  )
}

export default TrackingItem
