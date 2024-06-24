import moment from "moment"
import Link from "next/link"
import { redirect } from 'next/navigation'

const TrackingTable = ({ data }) => {
    if (!data) {
        alert('No data found')
        return redirect('/admin/tracking')
    }

    const handleDelete = async (id) => {
        await fetch(`/api/tracking/${id}`, { method: 'DELETE' })
        return alert('Success')
    }

    return (
        <>
            <div className="w-full h-10 flex items-center justify-end">
                <Link href='/admin/tracking/create' className="btn btn-sm">Create</Link>
            </div>
            <table className="table border">
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
                    {
                        data.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{item.trackingNumber}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.from}
                                </td>
                                <td>{item.to}</td>
                                <td>{moment(item.dateSend).format('DD-MM-YYYY')}</td>
                                <td>{moment(item.estimateReceivedDay).format('DD-MM-YYYY')}</td>
                                <td>
                                    <Link prefetch={true} href={`/admin/tracking/update/${item.trackingNumber}`} className="btn btn-ghost text-accent btn-xs">Edit</Link>
                                    <button type="button" className="btn btn-ghost btn-xs text-error" onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}

export default TrackingTable