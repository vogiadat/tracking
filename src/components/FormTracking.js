import { getDetailTracking } from '@/app/admin/tracking/cache/api'
import { DateCom, InputCom } from '@/components/ui'
import { ButtonCancel, ButtonSubmit } from '@/components/ui/form'

const FormTracking = async ({ handleSubmit, trackingId }) => {
  let defaultValue = {}

  if (trackingId) {
    defaultValue = await getDetailTracking(trackingId)
  }

  const {
    id,
    trackingNumber,
    from,
    to,
    dateSend,
    estimateReceivedDay,
    services,
    terms,
    packaging,
    totalPackage
  } = defaultValue

  return (
    <>
      <div className='flex p-8 gap-8 mt-8'>
        <div className='flex-1'>
          <form action={handleSubmit}>
            <input name='id' defaultValue={id} hidden />
            <div className='w-full flex gap-x-8'>
              <div className='flex-1'>
                <div className=''>
                  <h2 className='text-xl font-extrabold text-gray-900'>SHIPMENT OVERVIEW</h2>
                  <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
                    <div className='col-span-full'>
                      <InputCom
                        title={'Tracking Number'}
                        id={'trackingNumber'}
                        plainText={'Tracking Number'}
                        value={trackingNumber}
                      />
                    </div>
                    <div className='col-span-full'>
                      <InputCom title={'From'} plainText={'From'} value={from} id={'from'} />
                    </div>
                    <div className='col-span-full'>
                      <InputCom title={'To'} plainText={'To'} value={to} id={'to'} />
                    </div>
                    <div className='col-span-full'>
                      <DateCom
                        title={'Date Send'}
                        value={dateSend}
                        id={'dateSend'}
                        max={estimateReceivedDay}
                      />
                    </div>
                    <div className='col-span-full'>
                      <DateCom
                        title={'Estimate ReceivedDay'}
                        value={estimateReceivedDay}
                        id={'estimateReceivedDay'}
                        min={dateSend}
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
                        title={'Services'}
                        plainText={''}
                        value={services}
                        id={'services'}
                      />
                    </div>
                    <div className='col-span-full'>
                      <InputCom title={'Terms'} value={terms} id={'terms'} />
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h2 className='text-xl font-extrabold text-gray-900'>PACKAGE DETAILS</h2>
                  <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
                    <div className='col-span-full'>
                      <InputCom
                        title={'Packaging'}
                        plainText={''}
                        value={packaging}
                        id={'packaging'}
                      />
                    </div>
                    <div className='col-span-full'>
                      <InputCom title={'Total Package'} value={totalPackage} id={'totalPackage'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full flex justify-end gap-x-8'>
              <div className='flex-1' />
              <div className='mt-6 flex-1 flex items-center gap-x-6'>
                <ButtonCancel customClassName='flex-1' />
                <ButtonSubmit customClassName='flex-1' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormTracking
