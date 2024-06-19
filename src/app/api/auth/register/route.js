import User from "@/models/User";

export async function GET() {
    try {
        const data = await User.findOne({ where: { email: "admin@gmail.com" } })
        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500 })
    }
}
