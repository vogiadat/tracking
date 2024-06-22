import { Tracking, TrackingItem } from "@/models"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
    const { trackingNumber } = res.params
    try {
        const res = await Tracking.findOne({
            where: {
                trackingNumber
            },
            include: {
                model: TrackingItem,
                as: 'trackingItems'
            }
        })

        if (!res) return NextResponse.json("Tracking Number invalid!!!", { status: 404 })
        return NextResponse.json(res, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}

export const PATCH = async (req, res) => {
    try {
        // const res = await Tracking.
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })

    }
}