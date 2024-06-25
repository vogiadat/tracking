import { TrackingItem } from '@/models'
import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { catching } from '@/config/const'

export const DELETE = async (req, res) => {
  const { id } = res.params
  try {
    await TrackingItem.destroy({ where: { id } })
    return NextResponse.json(id, { status: 200 })
  } catch (error) {
    console.log({ error })
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const GET = async (req, res) => {
  const { id } = res.params
  try {
    const data = await TrackingItem.findOne({ where: { id } })
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log({ error })
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const PATCH = async (req, res) => {
  const { id } = res.params
  const body = await req.json()
  try {
    const data = await TrackingItem.update(body, { where: { id } })
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log({ error })
    return NextResponse.json({ error }, { status: 500 })
  }
}
