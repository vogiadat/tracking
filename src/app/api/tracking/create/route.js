import { Tracking, TrackingItem } from '@/models'
import { NextResponse } from 'next/server'

export const POST = async (req) => {
  try {
    const data = await req.json()

    const resTracking = await Tracking.create({ ...data })

    return NextResponse.json({ resTracking }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
