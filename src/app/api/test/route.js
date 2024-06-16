import { getSequelize } from "@/database/config";

export async function GET(request) {
    const sequelize = await getSequelize();
    const data = await sequelize.query("select 1 = 1");
}
