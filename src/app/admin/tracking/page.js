import Link from 'next/link'
import moment from 'moment'
import FormDeleteTracking from './form-delete-tracking'
import { getTrackings } from './cache/api'

const TrackingPage = async ({ searchParams }) => {
  const { isOpenFormDelete, trackingId, trackingNumber } = searchParams
  const { isOk, trackings } = await getTrackings()

  const open = isOpenFormDelete && trackingId

  return (
    <div className='h-full w-full px-16 pt-6'>
      <div className='w-full h-10 flex items-center justify-end'>
        <Link href='/admin/tracking/create' className='btn btn-sm btn-info text-base-100'>
          Create
        </Link>
      </div>
      <dialog id='my_modal_3' className='modal' open={open}>
        <div className='modal-box min-w-[700px]'>
          {open && <FormDeleteTracking trackingId={trackingId} trackingNumber={trackingNumber} />}
        </div>
      </dialog>
      <table className='table border'>
        {/* head */}
        <thead>
          <tr>
            <th>Tracking Number</th>
            <th>From</th>
            <th>To</th>
            <th>Date Send</th>
            <th>Estimate Received Day</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isOk ? (
            trackings.map((tracking) => <Row key={tracking.id} {...tracking} />)
          ) : (
            <div role='alert' className='alert'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 shrink-0 stroke-current'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>
                <span className='text-error font-extrabold'>Error: </span>
                Not found data
              </span>
            </div>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TrackingPage

const Row = ({ id, trackingNumber, from, to, dateSend, estimateReceivedDay }) => {
  return (
    <tr>
      <td>
        <div className='flex items-center gap-3'>
          <div>
            <div className='font-bold'>{trackingNumber}</div>
          </div>
        </div>
      </td>
      <td>{from}</td>
      <td>{to}</td>
      <td>{moment(dateSend).format('DD-MM-YYYY')}</td>
      <td>{moment(estimateReceivedDay).format('DD-MM-YYYY')}</td>
      <td className='flex gap-x-2'>
        <Link
          href={`/admin/tracking/update/${trackingNumber}`}
          className='btn btn-outline btn-sm text-info hover:bg-info/80 hover:border-white'
        >
          Detail
        </Link>
        <Link
          href={`/admin/tracking-item/${id}`}
          className='btn btn-outline btn-sm text-ghost hover:bg-ghost/80 hover:border-white'
        >
          Delivery
        </Link>
        <Link
          href={{
            query: { trackingId: id, isOpenFormDelete: true, trackingNumber }
          }}
          className='btn btn-outline btn-sm text-error hover:bg-error/80 hover:border-white'
        >
          Delete
        </Link>
      </td>
    </tr>
  )
}
