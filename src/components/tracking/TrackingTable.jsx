"use client"
import moment from "moment"
import Link from "next/link"
import { useRouter } from "next/navigation"

const TrackingTable = ({ data }) => {
    const router = useRouter()

    if (!data) {
        router.push('/admin/tracking')
        return alert('No data found')
    }

    const handleEdit = (item) => {
        return router.push(`/admin/tracking/update/${item.trackingNumber}`)
    }

    const handleDelete = async (id) => {
        const res = await fetch(`/api/tracking/${id}`, { method: 'DELETE' })
        console.log(res)
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
                                    <button className="btn btn-ghost text-accent btn-xs" onClick={() => handleEdit(item)}>Edit</button>
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