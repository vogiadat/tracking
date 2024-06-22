import { Tracking, TrackingItem } from "@/models";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const data = await req.json()

        const resTracking = await Tracking.create({ ...data })

        data.trackingItems.map(async item => {
            const res = await TrackingItem.create({ ...item, trackingId: resTracking.id })
            if (!res) throw new Error("Can't create tracking item")
        })

        return NextResponse.json({ resTracking }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
