import User from "@/models/User";

export async function GET() {
    try {
        await User.create({ email: 'admin@gmail.com', password: '123123' })
        const data = await User.findAll()
        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}
