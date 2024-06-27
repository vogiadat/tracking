'use client'

import { compileURL } from '@/config/const'
import moment from 'moment'
import Image from 'next/image'

const TrackingItemList = ({ createdAt, title, status, location, image }) => {
  const isExistImage = !!image

  const handleModal = () => {
    document.getElementById('my_modal_3').showModal()
  }

  return (
    <li>
      <dialog id='my_modal_3' className='modal'>
        <div className='modal-box place-content-center'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
          <h3 className='font-bold text-lg'>{title}</h3>
          <div
            className='w-full h-80 rounded-2xl'
            style={{
              background: `url('${image}') no-repeat border-box center center`,
              backgroundSize: 'cover'
            }}
          />
        </div>
      </dialog>
      <hr />
      <div className='timeline-start text-center text-base-100'>
        <div className='bg-accent rounded-full px-2'>
          <span>{moment(createdAt).format('DD/MM/YYYY')}</span>{' '}
          <span className='max-sm:hidden'>{moment(createdAt).format('HH:MM:SS')}</span>
        </div>
        {isExistImage && (
          <div className='sm:hidden w-20 h-20 mx-auto my-2'>
            <Image
              src={image}
              alt={title}
              width={0}
              height={0}
              className={'cursor-pointer w-full h-full object-cover border'}
              onClick={() => isExistImage && handleModal(image)}
            />
          </div>
        )}
      </div>
      <div className='timeline-middle px-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-5 h-5'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className='timeline-end md:text-start mt-8'>
        <div className='text-lg font-black text-accent'>
          <span className='mr-1'>{title || 'No Data'}</span>
          <span className='badge badge-info text-base-100 font-normal'>{status}</span>
        </div>
        <div className='text-zinc-500 font-semibold flex gap-8 my-1'>
          <p>{location}</p>
          {isExistImage && (
            <div className='md:h-6 md:w-6 sm:h-10 sm:w-10 hidden'>
              <Image
                src={image}
                alt={title}
                width={0}
                height={0}
                className={'cursor-pointer w-full h-full object-cover border'}
                onClick={() => isExistImage && handleModal(image)}
              />
            </div>
          )}
        </div>
      </div>
      <hr />
    </li>
  )
}

export default TrackingItemList
