import { TrackingList } from '@/components/tracking'
import { TableRow } from '@/components/table-row'
import { getDetailTracking } from '@/app/admin/tracking/cache/api'
import moment from 'moment'

const TrackingDetail = async ({ params }) => {
  const { trackingId } = params

  const data = await getDetailTracking(trackingId)
  const isExistTracking = !!data.id

  return (
    <section className='h-full w-full'>
      {isExistTracking ? (
        <>
          <div className='w-full stats rounded-none shadow'>
            <div className='stat'>
              <div className='stat-title'>Tracking Number</div>
              <div className='stat-value text-primary'>{data.trackingNumber}</div>
            </div>

            <div className='stat'>
              <div className='stat-title'>Delivery Status</div>
              <div className='stat-value text-primary'>
                {data.trackingItems?.at(0).location || ''}
              </div>
              <div className='stat-desc font-bold text-lg'>
                {data.trackingItems?.at(0).status || ''}
              </div>
            </div>

            <div className='stat'>
              <div className='stat-title'>Date Time</div>
              <div className='stat-value text-primary'>
                {data.trackingItems.at(0)
                  ? moment(data.trackingItems.at(0).createdAt).format('MMMM Do YYYY - HH:MM:SS')
                  : ''}
              </div>
              <div className='stat-desc text-secondary'>Local Time</div>
            </div>
          </div>
          <div className='flex p-8 gap-8'>
            <div className='flex-1'>
              <h1 className='w-full text-xl text-center font-extrabold text-gray-900'>
                Shipment Information
              </h1>
              <div className='mt-8 relative overflow-x-auto shadow-md'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                  <caption className='text-center text-base font-bold text-accent'>
                    SHIPMENT OVERVIEW
                  </caption>
                  <tbody>
                    <TableRow title={'Tracking Number'} data={data.trackingNumber} />
                    <TableRow title={'From'} data={data.from} />
                    <TableRow title={'To'} data={data.to} />
                    <TableRow title={'Date Send'} data={data.dateSend} />
                    <TableRow title={'Estimate Received Day'} data={data.estimateReceivedDay} />
                  </tbody>
                </table>
              </div>
              <div className='mt-8 relative overflow-x-auto shadow-md'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                  <caption className='text-center text-base font-bold text-accent'>
                    SERVICES
                  </caption>
                  <tbody>
                    <TableRow title={'Services'} data={data.services} />
                    <TableRow title={'Terms'} data={data.terms} />
                  </tbody>
                </table>
              </div>
              <div className='mt-8 relative overflow-x-auto shadow-md'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                  <caption className='text-center text-base font-bold text-accent'>
                    PACKAGE DETAILS
                  </caption>
                  <tbody>
                    <TableRow title={'Packaging'} data={data.packaging} />
                    <TableRow title={'Total Package'} data={data.totalPackage} />
                  </tbody>
                </table>
              </div>
            </div>
            <div className='flex-1'>
              <h2 className='w-full text-xl text-center font-extrabold text-gray-900'>
                Delivery History
              </h2>
              <TrackingList data={data.trackingItems || []} />
            </div>
          </div>
        </>
      ) : (
        <div className='container mx-auto mt-4'>
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
              Not found Tracking Number:
              <span className='badge badge-error mx-1'>{trackingId}</span>.
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

export default TrackingDetail
