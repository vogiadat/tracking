import Link from 'next/link'

import { TrackingTable } from '@/components/tracking'

const TrackingPage = () => {

    return (

        <div className="h-full w-full px-16 pt-6">
            <div className="w-full h-10 flex items-center justify-end">
                <Link href='/admin/tracking/create' className="btn btn-sm">Create</Link>
            </div>
            <TrackingTable />
        </div>
    )
}

export default TrackingPage