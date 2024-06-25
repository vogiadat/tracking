'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { DateCom, InputCom } from '@/components/ui'

const Form = () => {
  const params = useParams()
  const router = useRouter()
  const isUpdate = !!params.id
  const [data, setData] = useState({
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
  })

  const fetchData = async () => {
    const res = await fetch(`/api/tracking/${params.id}`)
    const value = await res.json()
    return setData(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const option = {
      url: isUpdate ? `/api/tracking/${data.id}` : '/api/tracking/create',
      method: isUpdate ? 'PATCH' : 'POST'
    }

    const res = await fetch(option.url, {
      method: option.method,
      body: JSON.stringify(data)
    })
    if (!res.ok) return
    return router.push('/admin/tracking')
  }

  useEffect(() => {
    if (params.id) fetchData()
  }, [params.id])

  return (
    <>
      <div className='flex p-8 gap-8 mt-8'>
        <div className='flex-1'>
          <form className='' onSubmit={handleSubmit}>
            <div className='w-full flex gap-x-8'>
              <div className='flex-1'>
                <div className=''>
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
              </div>

              <div className='flex-1 flex flex-col justify-between'>
                <div className=''>
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
                <div className=''>
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
              </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <div>
                <Link href='/admin/tracking' className='btn btn-error text-base-100'>
                  Cancel
                </Link>
                <button type='submit' className='ml-5 btn btn-info text-base-100'>
                  {isUpdate ? 'Update' : 'Create'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
