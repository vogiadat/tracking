import { getTrackingById } from '@/app/actions/tracking'
import { TrackingList } from '@/components/tracking'
import { TableRow } from '@/components/table-row'
import moment from 'moment'

const TrackingDetail = async ({ params }) => {
  const { trackingId } = params

  const data = await getTrackingById(trackingId)
  console.log('123u123 ==> ', data)

  if (!data) return <h1>Hello word</h1>

  return (
    <section className='h-full w-full'>
      <div className='w-full stats rounded-none shadow'>
        <div className='stat'>
          <div className='stat-title'>Tracking Number</div>
          <div className='stat-value text-primary'>{data.trackingNumber}</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>Delivery Status</div>
          <div className='stat-value text-primary'>{data.trackingItems?.at(0).location}</div>
          <div className='stat-desc'>{data.trackingItems?.at(0).status}</div>
        </div>

        <div className='stat'>
          <div className='stat-title'>Date Time</div>
          <div className='stat-value text-primary'>
            {moment(data.trackingItems?.at(0).createdAt).format('MMMM Do YYYY - HH:MM:SS')}
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
              <tbody>
                {/* <tr className='py-5 text-right text-base font-bold text-accent'>
                  SHIPMENT OVERVIEW
                </tr> */}
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
              <tbody>
                {/* <tr className='py-5 text-right text-base font-bold text-accent'>SERVICES</tr> */}
                <TableRow title={'Services'} data={data.services} />
                <TableRow title={'Terms'} data={data.terms} />
              </tbody>
            </table>
          </div>
          <div className='mt-8 relative overflow-x-auto shadow-md'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <tbody>
                {/* <tr className='py-5 text-right text-base font-bold text-accent'>PACKAGE DETAILS</tr> */}
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
          <TrackingList data={data.trackingItems} />
        </div>
      </div>
    </section>
  )
}

export default TrackingDetail
