'use client'

import Form from '@/components/Form'
import { useState } from 'react'

const dataStatus = [{
    id: '12321312',
    location: "Ho Chi Minh",
    status: 'Delivery',
    createAt: 'June 17th 2024 - 23:06:78',
}, {
    id: '1232131asdf2',
    location: "Ha Noi",
    status: 'Transit',
    createAt: 'June 18th 2024 - 00:06:78',
}]

const UpdateTracking = () => {
    const [statusList, setStatusList] = useState(dataStatus)
    const [packageData, setPackageData] = useState({
        trackingNumber: "213213213",       // Tracking Number
        from: "Ho Chi Minh",                 // From
        to: "Ha Noi",                   // To
        dateSend: "June 17th 2024 - 23:06:78",             // Date Send
        estimateReceivedDay: "June 18th 2024 - 00:06:78",  // Estimate Received Day
        services: "",             // Services
        terms: "",                // Terms
        packaging: "",            // Packaging
        totalPackage: "",          // Total Package
        deliveryStatus: statusList
    })



    return (
        <div className="min-w-full">
            <Form data={packageData} setData={setPackageData} type={'Update'} />
        </div>
    )
}

export default UpdateTracking