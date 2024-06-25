import { Tracking, TrackingItem } from '@/models'
import { NextResponse } from 'next/server'

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

    return NextResponse.json(resTracking, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const DELETE = async (req, res) => {
  const { trackingNumber: id } = res.params
  try {
    const isExistTracking = await Tracking.findOne({ where: { id } })
    if (!isExistTracking) throw new Error()

    await TrackingItem.destroy({ where: { trackingId: id } }).then(async () =>
      Tracking.destroy({ where: { id } })
    )
    return NextResponse.json(id, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
