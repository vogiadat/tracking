import { getTrackingById } from '@/app/actions/tracking'
import { TrackingList } from '@/components/tracking'
import moment from 'moment'

const TrackingDetail = async ({ params }) => {
    const { trackingId } = params

    const data = await getTrackingById(trackingId)

    return (
        <section className="h-full w-full">
            <div className="w-full stats rounded-none shadow">
                <div className="stat">
                    <div className="stat-title">Tracking Number</div>
                    <div className="stat-value text-primary">{data.trackingNumber}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Delivery Status</div>
                    <div className="stat-value text-primary">{data.trackingItems.at(0).location}</div>
                    <div className="stat-desc">{data.trackingItems.at(0).status}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Date Time</div>
                    <div className="stat-value text-primary">{moment(data.trackingItems.at(0).createdAt).format('MMMM Do YYYY - HH:MM:SS')}</div>
                    <div className="stat-desc text-secondary">Local Time</div>
                </div>

            </div>
            <div className="flex p-8 gap-8">
                <div className="flex-1">
                    <h1 className="w-full text-xl text-center font-extrabold text-gray-900">Shipment Information</h1>
                    <div class="mt-8 relative overflow-x-auto shadow-md">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                <tr class="py-5 text-right text-base font-bold text-accent">
                                    SHIPMENT OVERVIEW
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow title={"Tracking Number"} data={data.trackingNumber} />
                                <TableRow title={"From"} data={data.from} />
                                <TableRow title={"To"} data={data.to} />
                                <TableRow title={"Date Send"} data={data.dateSend} />
                                <TableRow title={"Estimate Received Day"} data={data.estimateReceivedDay} />
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-8 relative overflow-x-auto shadow-md">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                <tr class="py-5 text-right text-base font-bold text-accent">
                                    SERVICES
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow title={"Services"} data={data.services} />
                                <TableRow title={"Terms"} data={data.terms} />
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-8 relative overflow-x-auto shadow-md">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                <tr class="py-5 text-right text-base font-bold text-accent">
                                    PACKAGE DETAILS
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow title={"Packaging"} data={data.packaging} />
                                <TableRow title={"Total Package"} data={data.totalPackage} />
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="w-full text-xl text-center font-extrabold text-gray-900">Delivery History</h2>
                    <TrackingList data={data.trackingItems} />
                </div>
            </div >
        </section >
    )
}

export default TrackingDetail

const TableRow = ({ title, data }) => (
    <tr class="border-b">
        <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-base-100 dark:bg-accent">
            {title}
        </th>
        <td class="w-1/2 px-4 py-2 bg-base-200 text-accent">
            {data}
        </td>
    </tr>
)