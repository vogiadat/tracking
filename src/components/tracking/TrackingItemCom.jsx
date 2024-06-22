'use client'

import { useState } from 'react'

const TrackingItemCom = ({ type, handleCreate, handleCancel }) => {
    const [statusData, setStatusData] = useState({ status: "Tracking Create", location: "Ho Chi Minh" })

    return (
        <div className="space-y-4">
            <div className="w-full">
                <label className="font-bold text-sm" htmlFor='status'>
                    STATUS
                </label>
                <input id='status' name='status' type="text" className="mt-2 -mb-8 input input-sm input-bordered min-w-full" value={statusData.status} onChange={e => setStatusData({ ...statusData, status: e.target.value })} />
            </div>
            <div className="w-full">
                <label className="font-bold text-sm" htmlFor='location'>
                    LOCATION
                </label>
                <input id='location' name='location' type="text" className="mt-2 -mb-8 input input-sm input-bordered min-w-full" value={statusData.location} onChange={e => setStatusData({ ...statusData, location: e.target.value })} />
            </div>
            <button type="button" className="btn btn-sm btn-error text-base-100" onClick={handleCancel}>
                Cancel
            </button>
            <button
                type="button"
                className="btn btn-sm"
                onClick={() => handleCreate({ statusData, setStatusData })}
            >
                {type}
            </button>
        </div>
    )

}

export default TrackingItemCom