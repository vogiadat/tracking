import { Tracking, TrackingItem } from '@/models'
import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { catching } from '@/config/const'

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

    if (!res) return NextResponse.json('Tracking Number invalid!!!', { status: 404 })
    return NextResponse.json(res, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const PATCH = async (req, res) => {
  const { trackingNumber: id } = res.params
  try {
    const data = await req.json()
    const resTracking = await Tracking.update(data, { where: { id } })

    data.trackingItems.map(async (item) => {
      if (!item.id) {
        const res = await TrackingItem.create({ ...item, trackingId: id })
        if (!res) throw new Error("Can't create tracking item")
      }
    })

    if (!resTracking) return NextResponse.json('Tracking Id invalid!!!', { status: 404 })
    revalidateTag(catching.GET_TRACKING_BY_ID)
    return NextResponse.json(resTracking, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
