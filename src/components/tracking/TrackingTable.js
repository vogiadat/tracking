// import { fetchTracking } from "@/app/actions/tracking"
'use client'
import { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

const TrackingTable = () => {
  const [data, setData] = useState([])

  const handleDelete = async (id) => {
    const isConfirm = confirm('Do you want delete it?')
    if (!isConfirm) return
    const res = await fetch(`/api/tracking/${id}`, { method: 'DELETE' })
    if (!res.ok) return alert("Can't delete because it have Delivery Status")
    return router.push('/admin/tracking')
  }

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
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <div className='flex items-center gap-3'>
                  <div>
                    <div className='font-bold'>{item.trackingNumber}</div>
                  </div>
                </div>
              </td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{moment(item.dateSend).format('DD-MM-YYYY')}</td>
              <td>{moment(item.estimateReceivedDay).format('DD-MM-YYYY')}</td>
              <td className='flex gap-x-2'>
                <Link
                  href={`/admin/tracking/update/${item.trackingNumber}`}
                  className='btn btn-outline btn-sm text-info hover:bg-info/80 hover:border-white'
                >
                  Detail
                </Link>
                <Link
                  href={`/admin/tracking/update/${item.trackingNumber}/tracking-items`}
                  className='btn btn-outline btn-sm text-ghost hover:bg-ghost/80 hover:border-white'
                >
                  Delivery
                </Link>
                <button
                  type='button'
                  className='btn btn-outline btn-sm text-error hover:bg-error/80 hover:border-white'
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TrackingTable
