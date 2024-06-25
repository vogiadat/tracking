import Link from 'next/link'
import React from 'react'

const TrackingItem = ({ title, status, image, location, createdAt, id }) => {
  const existImage = !!image

  return (
    <div
      className='card text-base-200'
      style={{
        background: existImage
          ? `url(${image}) no-repeat border-box center center`
          : `rgb(240, 240, 240)`,
        backgroundSize: 'cover'
      }}
    >
      <div className='card-body items-center text-center bg-neutral/50 rounded-2xl'>
        <div className='badge badge-primary'>{status || 'no update'}</div>
        <h2 className='card-title'>{title || 'no update'}</h2>
        <p>location: {location || 'no update'}</p>
        <div className='card-actions justify-end'>
          <Link href={{ query: { trackingItemId: id } }} className='btn btn-info text-base-100'>
            Update
          </Link>
          <Link
            href={{
              query: {
                isOpenFormDelete: true,
                trackingItemId: id
              }
            }}
            className='btn btn-error text-base-100'
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TrackingItem
