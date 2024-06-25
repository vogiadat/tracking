import { User } from '@/models'

export async function GET() {
  try {
    await User.create({ email: 'admin@gmail.com', password: '123123' })
    const data = await User.findOne({ where: { email: 'admin@gmail.com' } })
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 })
  }
}
