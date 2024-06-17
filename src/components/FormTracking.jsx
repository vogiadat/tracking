'use client'

import Link from "next/link"
import Status from "./Status"
import moment from "moment";
import { useState } from "react";

const dataStatus = [{
    id: '12321312',
    location: "Ho Chi Minh",
    status: 'Delivery',
    createAt: 'June 17th 2024 - 23:06:78',
}, {
    id: '1232131asdf2',
    location: "Ha Noi",
    status: 'Transit',
    createAt: 'June 17th 2024 - 24:06:78',
}
]

const FormTracking = ({ type }) => {
    const [toggleAddStatus, setToggleAddStatus] = useState(false)
    const [statusList, setStatusList] = useState(dataStatus)
    const [statusData, setStatusData] = useState({ status: "", location: "", createAt: "" })

    const handleCreateStatus = () => {
        const data = { ...statusData, createAt: moment().format('MMMM Do YYYY - HH:MM:SS'), id: new Date().toString() }
        setStatusData({ status: "", location: "", createAt: "" })
        setStatusList([...statusList, data])
        return setToggleAddStatus(false)
    }


    return (
        <>
            <h1 className="text-4xl text-center font-bold">Shipment Information</h1>
            <div className="flex p-8 gap-8">
                <div className="flex-1">
                    <h2 className="text-xl font-extrabold text-gray-900">Delivery History</h2>

                    <ul className="timeline timeline-vertical">
                        {statusList.map(data => (
                            <li key={data.id}>
                                <hr />
                                <div className="timeline-start">{data.createAt}</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end md:text-end mb-10">
                                    <div className="text-lg font-black">{data.status}</div>
                                    {data.location}
                                </div>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <form className="">
                        <div className="space-y-8">
                            <div className="border-b border-gray-900/10 pb-8">
                                <h2 className="text-xl font-extrabold text-gray-900">SHIPMENT OVERVIEW</h2>
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <InputCom title={'TRACKING NUMBER'} plainText={'enter tracking number'} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'FROM'} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'TO'} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'DATE SEND'} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'ESTIMATE RECEIVED DAY'} />
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-900/10 pb-8">
                                <h2 className="text-xl font-extrabold text-gray-900">SERVICES</h2>
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <InputCom title={'SERVICES'} plainText={''} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'TERMS'} />
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-900/10 pb-8">
                                <h2 className="text-xl font-extrabold text-gray-900">PACKAGE DETAILS</h2>
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <InputCom title={'PACKAGING'} plainText={''} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'TOTAL PACKAGE'} />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-900/10 pb-8">
                                <h2 className="text-xl font-extrabold text-gray-900">DELIVERY STATUS</h2>
                                <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-4">
                                    <Status data={statusList} />
                                </div>
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4">
                                    {toggleAddStatus &&
                                        <StatusCom
                                            type={'Create'}
                                            data={statusData}
                                            setData={setStatusData}
                                            handleCreate={handleCreateStatus}
                                            handleCancel={() => setToggleAddStatus(false)}
                                        />
                                    }
                                    {!toggleAddStatus &&
                                        <button type="button" className="btn" onClick={() => setToggleAddStatus(true)}>Add</button>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <Link href="/" className="btn btn-sm btn-error text-base-100">
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="btn btn-sm"
                            >
                                {type}
                            </button>
                        </div>
                    </form >
                </div>
            </div>
        </>

    )
}

export default FormTracking

const InputCom = ({ title, plainText }) => (<>
    <label className="font-bold text-sm" htmlFor={title}>
        {title}
    </label>
    <input id={title} name={title} type="text" className="mt-2 -mb-8 input input-sm input-bordered min-w-full" placeholder={plainText} />
</>
)

const StatusCom = ({ data, setData, type, handleCreate, handleCancel }) => {
    return (
        <div className="space-y-4">
            <div className="w-full">
                <label className="font-bold text-sm" htmlFor='status'>
                    STATUS
                </label>
                <input id='status' name='status' type="text" className="mt-2 -mb-8 input input-sm input-bordered min-w-full" value={data.status} onChange={e => setData({ ...data, status: e.target.value })} />
            </div>
            <div className="w-full">
                <label className="font-bold text-sm" htmlFor='location'>
                    LOCATION
                </label>
                <input id='location' name='location' type="text" className="mt-2 -mb-8 input input-sm input-bordered min-w-full" value={data.location} onChange={e => setData({ ...data, location: e.target.value })} />
            </div>
            <button type="button" className="btn btn-sm btn-error text-base-100" onClick={handleCancel}>
                Cancel
            </button>
            <button
                type="button"
                className="btn btn-sm"
                onClick={handleCreate}
            >
                {type}
            </button>
        </div>
    )

}