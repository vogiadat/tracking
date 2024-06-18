'use client'

import Link from "next/link"
import StatusCard from "./StatusCard"
import moment from "moment";
import { useState } from "react";
import StatusList from "./StatusList";

const Form = ({ data, setData, type }) => {
    const [toggleAddStatus, setToggleAddStatus] = useState(false)

    const handleCreateStatus = ({ statusData, setStatusData }) => {
        const newStatus = { ...statusData, createAt: moment().format('MMMM Do YYYY - HH:MM:SS'), id: new Date().toString() }
        setStatusData({ status: "", location: "", createAt: "" })
        const newData = [...data.deliveryStatus, newStatus]
        setData({ ...data, deliveryStatus: newData })
        return setToggleAddStatus(false)
    }

    return (
        <>
            <h1 className="text-4xl text-center font-bold">Shipment Information</h1>
            <div className="flex p-8 gap-8">
                <div className="flex-1">
                    <h2 className="text-xl font-extrabold text-gray-900">Delivery History</h2>
                    <StatusList data={data.deliveryStatus} />
                </div>
                <div className="flex-1">
                    <form className="">
                        <div className="space-y-4">
                            <div className="border-b border-gray-900/10 pb-6">
                                <h2 className="text-xl font-extrabold text-gray-900">SHIPMENT OVERVIEW</h2>
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <InputCom status={type === "Update"} title={'TRACKING NUMBER'} plainText={'enter tracking number'} value={data.trackingNumber} onChange={(e) => setData({ ...data, trackingNumber: e.target.value })} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'FROM'} value={data.from} onChange={e => setData({ ...data, from: e.target.value })} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'TO'} value={data.to} onChange={e => setData({ ...data, to: e.target.value })} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'DATE SEND'} value={data.dateSend} onChange={e => setData({ ...data, dataSend: e.target.value })} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'ESTIMATE RECEIVED DAY'} value={data.estimateReceivedDay} onChange={e => setData({ ...data, estimateReceivedDay: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-900/10 pb-6">
                                <h2 className="text-xl font-extrabold text-gray-900">SERVICES</h2>
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <InputCom title={'SERVICES'} plainText={''} value={data.services} onChange={e => setData({ ...data, services: e.target.value })} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'TERMS'} value={data.terms} onChange={e => setData({ ...data, terms: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-900/10 pb-6">
                                <h2 className="text-xl font-extrabold text-gray-900">PACKAGE DETAILS</h2>
                                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <InputCom title={'PACKAGING'} plainText={''} value={data.packaging} onChange={e => setData({ ...data, packaging: e.target.value })} />
                                    </div>
                                    <div className="col-span-full">
                                        <InputCom title={'TOTAL PACKAGE'} value={data.totalPackage} onChange={e => setData({ ...data, totalPackage: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-gray-900/10 pb-6">
                                <h2 className="text-xl font-extrabold text-gray-900">DELIVERY STATUS</h2>
                                <div className="mt-2 grid grid-cols-2 gap-6">
                                    <StatusCard data={data.deliveryStatus} />
                                </div>
                                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4">
                                    {toggleAddStatus &&
                                        <StatusCom
                                            type={'Create'}
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

export default Form

const InputCom = ({ title, plainText, status, value, onChange }) => (<>
    <label className="font-bold text-sm" htmlFor={title}>
        {title}
    </label>
    <input id={title} name={title} value={value} onChange={onChange} type="text" className="mt-2 -mb-8 input input-sm input-bordered min-w-full" placeholder={plainText} />
</>
)

const StatusCom = ({ type, handleCreate, handleCancel }) => {
    const [statusData, setStatusData] = useState({ status: "", location: "", createAt: "" })

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