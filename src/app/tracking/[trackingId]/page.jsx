'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const TrackingDetail = () => {
    const { trackingId } = useParams()

    return (
        <div>{trackingId}</div>
    )
}

export default TrackingDetail