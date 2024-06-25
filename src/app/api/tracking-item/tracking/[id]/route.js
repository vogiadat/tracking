// api/tracking-item/tracking/:id -> tracking id

import { Tracking, TrackingItem } from '@/models'
import { NextResponse } from 'next/server'

export const GET = async (req, res) => {
  const { id } = res.params
  try {
    const isExistTracking = await Tracking.findOne({
      where: { id }
    })
    if (!isExistTracking) throw new Error()

    const data = await TrackingItem.findAll({
      where: {
        trackingId: id
      },
      order: [['createdAt', 'DESC']]
    })

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log({ error })
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const POST = async (req, res) => {
  const { id } = res.params
  try {
    const data = await req.json()
    console.log('1273981==> data', { data })
    const trackingItem = await TrackingItem.create({ ...data, trackingId: id })
    return NextResponse.json({ trackingItem }, { status: 200 })
  } catch (error) {
    console.log({ error })
    return NextResponse.json({ error }, { status: 500 })
  }
}
