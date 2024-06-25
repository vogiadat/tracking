import { catching } from '@/config/const'
import { Tracking } from '@/models'
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
  try {
    const res = await Tracking.findAll()
    return NextResponse.json(res, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
