"use server";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("KT", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    dialectModule: require("mysql2"),
});

export const getSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log("connect successfully");
        return sequelize;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
