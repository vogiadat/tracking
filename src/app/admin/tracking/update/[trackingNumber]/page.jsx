import Form from '@/components/Form'
import { getTrackingById } from '@/app/actions/tracking'

export const dataStatus = [{
    id: '12321312',
    location: "Ho Chi Minh",
    status: 'Delivery',
}, {
    id: '1232131asdf2',
    location: "Ha Noi",
    status: 'Transit',
}]

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