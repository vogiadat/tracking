import { TrackingItem } from '@/models'
import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { catching } from '@/config/const'

export const GET = async (req, res) => {
  try {
    return NextResponse.json('hello word', { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const POST = async (req) => {
  const data = await req.json()
  try {
    const res = await TrackingItem.create({ ...data })
    revalidateTag(catching.GET_TRACKING_BY_ID)
    return NextResponse.json(res, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
