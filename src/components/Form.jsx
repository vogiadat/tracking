'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DateCom, InputCom } from '@/components/ui'
import { TrackingItem, TrackingItemCom, TrackingList } from '@/components/tracking'

const Form = ({ packageData }) => {
  const router = useRouter()
  const isUpdate = !!packageData?.id
  const [toggleAddStatus, setToggleAddStatus] = useState(false)
  const [data, setData] = useState(
    isUpdate
      ? packageData
      : {
        id: '',
        trackingNumber: '',
        dateSend: '',
        estimateReceivedDay: '',
        from: '',
        to: '',
        packaging: '',
        services: '',
        terms: '',
        totalPackage: '',
        trackingItems: []
      }
  )

  const handleCreateStatus = ({ statusData, setStatusData }) => {
    const newStatus = { ...statusData }
    setStatusData({ status: '', location: '' })
    const newData = [...data.trackingItems, newStatus]
    setData({ ...data, trackingItems: newData })
    return setToggleAddStatus(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const option = {
        url: isUpdate ? `/api/tracking/${data.id}` : '/api/tracking/create',
        method: isUpdate ? 'PATCH' : 'POST'
      }

      const res = await fetch(option.url, {
        method: option.method,
        body: JSON.stringify(data)
      })

      if (res.ok) return router.push('/admin/tracking')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <h1 className='text-4xl text-center font-bold'>Shipment Information</h1>
      <div className='flex p-8 gap-8'>
        <div className='flex-1'>
          <form className='' onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <div className='border-b border-gray-900/10 pb-6'>
                <h2 className='text-xl font-extrabold text-gray-900'>SHIPMENT OVERVIEW</h2>
                <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
                  <div className='col-span-full'>
                    <InputCom
                      status={isUpdate}
                      title={'TRACKING NUMBER'}
                      plainText={'enter tracking number'}
                      value={data.trackingNumber}
                      onChange={(e) => setData({ ...data, trackingNumber: e.target.value })}
                    />
                  </div>
                  <div className='col-span-full'>
                    <InputCom
                      title={'FROM'}
                      value={data.from}
                      onChange={(e) => setData({ ...data, from: e.target.value })}
                    />
                  </div>
                  <div className='col-span-full'>
                    <InputCom
                      title={'TO'}
                      value={data.to}
                      onChange={(e) => setData({ ...data, to: e.target.value })}
                    />
                  </div>
                  <div className='col-span-full'>
                    <DateCom
                      max={data.estimateReceivedDay}
                      title={'DATE SEND'}
                      value={data.dateSend}
                      onChange={(e) => setData({ ...data, dateSend: e.target.value })}
                    />
                  </div>
                  <div className='col-span-full'>
                    <DateCom
                      min={data.dateSend}
                      title={'ESTIMATE RECEIVED DAY'}
                      value={data.estimateReceivedDay}
                      onChange={(e) =>
                        setData({
                          ...data,
                          estimateReceivedDay: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className='border-b border-gray-900/10 pb-6'>
                <h2 className='text-xl font-extrabold text-gray-900'>SERVICES</h2>
                <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
                  <div className='col-span-full'>
                    <InputCom
                      title={'SERVICES'}
                      plainText={''}
                      value={data.services}
                      onChange={(e) => setData({ ...data, services: e.target.value })}
                    />
                  </div>
                  <div className='col-span-full'>
                    <InputCom
                      title={'TERMS'}
                      value={data.terms}
                      onChange={(e) => setData({ ...data, terms: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className='border-b border-gray-900/10 pb-6'>
                <h2 className='text-xl font-extrabold text-gray-900'>PACKAGE DETAILS</h2>
                <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
                  <div className='col-span-full'>
                    <InputCom
                      title={'PACKAGING'}
                      plainText={''}
                      value={data.packaging}
                      onChange={(e) => setData({ ...data, packaging: e.target.value })}
                    />
                  </div>
                  <div className='col-span-full'>
                    <InputCom
                      title={'TOTAL PACKAGE'}
                      value={data.totalPackage}
                      onChange={(e) => setData({ ...data, totalPackage: e.target.value })}
                    />
                  </div>
                </div>
              </div>
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
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <Link href='/admin/tracking' className='btn btn-sm btn-error text-base-100'>
                Cancel
              </Link>
              <button type='submit' className='btn btn-sm'>
                {isUpdate ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
        <div className='flex-1'>
          <h2 className='text-xl font-extrabold text-gray-900'>Delivery History</h2>
          <TrackingList data={data.trackingItems} />
        </div>
      </div>
    </>
  )
}

export default Form
