import Form from '@/components/Form'
import { getTrackingById } from '@/app/actions/tracking'

const UpdateTracking = async ({ params }) => {
    const { trackingNumber } = params
    const data = await getTrackingById(trackingNumber)

    return (
        <div className="min-w-full">
            <Form packageData={data} />
        </div>
    )
}

export default UpdateTracking