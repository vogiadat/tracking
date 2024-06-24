// import { fetchTracking } from "@/app/actions/tracking"
'use client'
import { useState, useEffect } from "react"
import moment from "moment"
import Link from "next/link"

const TrackingTable = () => {
    const [data, setData] = useState([])

    const fetchTracking = async () => {
        const res = await fetch('http://localhost:3000/api/tracking')
        const value = await res.json()
        return setData(value)
    }

    useEffect(() => {
        fetchTracking()
    }, [])

    return (
        <>
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
                                    <Link href={`/admin/tracking/update/${item.trackingNumber}`} className="btn btn-ghost text-accent btn-xs">Edit</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table >
        </>
    )
}

export default TrackingTable