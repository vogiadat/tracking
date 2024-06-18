'use client'

import Form from '@/components/Form'
import { useState } from 'react'

const CreateTracking = () => {
    const [packageData, setPackageData] = useState({
        trackingNumber: "",       // Tracking Number
        from: "",                 // From
        to: "",                   // To
        dateSend: "",             // Date Send
        estimateReceivedDay: "",  // Estimate Received Day
        services: "",             // Services
        terms: "",                // Terms
        packaging: "",            // Packaging
        totalPackage: "",          // Total Package
        deliveryStatus: []
    })



    return (
        <div className="min-w-full">
            <Form data={packageData} setData={setPackageData} type={'Create'} />
        </div>
    )
}

export default CreateTracking