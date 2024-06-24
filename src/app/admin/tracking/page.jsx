'use client'

import { useState, useEffect } from 'react'
import { TrackingTable } from '@/components/tracking'

const TrackingPage = () => {
    const [data, setData] = useState([])

    const fetchTracking = async () => {
        const res = await fetch('/api/tracking')
        const data = await res.json()
        return setData(data)
    }

    useEffect(() => {
        fetchTracking()
    }, [])


    return (
        <div className="h-full w-full px-16 pt-6">
            <TrackingTable data={data} />
        </div>
    )
}

export default TrackingPage