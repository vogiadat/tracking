'use server'

const handleSubmit = async (data) => {
  const trackingId = data.get('trackingId')
  resetCache(true)
  return redirect(`/tracking/${trackingId}`)
}
