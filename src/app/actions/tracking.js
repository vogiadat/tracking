'use server'

export const getTrackingById = async (trackingNumber) => {
    const res = await fetch(`http://localhost:3000/api/tracking/${trackingNumber}`)
    return res.json()
}