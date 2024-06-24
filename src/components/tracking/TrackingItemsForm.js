'use client'

import React from 'react'
import { TrackingItem, TrackingItemCom, TrackingList } from '@/models'

const TrackingItemsForm = () => {
    const [toggleAddStatus, setToggleAddStatus] = useState(false)


    const handleCreateStatus = async ({ statusData, setStatusData }) => {
        const newStatus = isUpdate ? { ...statusData, trackingId: data.id } : statusData
        setStatusData({ status: '', location: '' })

        if (!isUpdate) {
            const newData = [...data.trackingItems, newStatus]
            setData({ ...data, trackingItems: newData })
            return setToggleAddStatus(false)
        }

        const res = await fetch('/api/tracking-item', {
            method: 'POST',
            body: JSON.stringify(newStatus)
        })

        const newTracking = await res.json()
        setData({ ...data, trackingItems: [...data.trackingItems, newTracking] })
        return setToggleAddStatus(false)
    }

    return (
        <>
            <div className='border-b border-gray-900/10 pb-6'>
                <h2 className='text-xl font-extrabold text-gray-900'>DELIVERY STATUS</h2>
                <div className='mt-2 grid grid-cols-2 gap-6'>
                    <TrackingItem data={data} setData={setData} />
                </div>
                <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-4'>
                    {toggleAddStatus ? (
                        <TrackingItemCom
                            type={'Create'}
                            handleCreate={handleCreateStatus}
                            handleCancel={() => setToggleAddStatus(false)}
                        />
                    ) : (
                        <button type='button' className='btn' onClick={() => setToggleAddStatus(true)}>
                            Add
                        </button>
                    )}
                </div>
            </div>
            <div className='flex-1'>
                <h2 className='text-xl font-extrabold text-gray-900'>Delivery History</h2>
                <TrackingList data={data.trackingItems} />
            </div>
        </>

    )
}

export default TrackingItemsForm