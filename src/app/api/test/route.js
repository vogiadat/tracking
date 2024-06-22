import { NextResponse } from "next/server"
import sequelize from "@/database/config"
import { Tracking, TrackingItem } from "@/models"

export const GET = () => {
    return NextResponse.json("Test")
}