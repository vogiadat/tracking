
const FormTracking = ({ type }) => {

    return (
        <>
            <form>
                <h1 className="text-4xl my-3 text-center font-bold">Shipment Information</h1>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-xl font-extrabold text-gray-900">SHIPMENT OVERVIEW</h2>
                        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-xl font-extrabold text-gray-900">SERVICES</h2>
                        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <InputCom title={'SERVICES'} plainText={''} />
                            </div>
                            <div className="col-span-full">
                                <InputCom title={'TERMS'} />
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-xl font-extrabold text-gray-900">PACKAGE DETAILS</h2>
                        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <InputCom title={'PACKAGING'} plainText={''} />
                            </div>
                            <div className="col-span-full">
                                <InputCom title={'TOTAL PACKAGE'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form >
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