import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "kt",
    dialect: "mysql",
    dialectModule: require("mysql2"),
    benchmark: true
});

(async () => {
    try {
        await sequelize.authenticate()
        console.log("Success ::: Connection has been established successfully.")

        // Sync defined models to the database
        await sequelize.sync({ alter: true }) // This will create tables if they don't exist or update the existing ones
    } catch (error) {
        console.error("Error ::: Unable to connect to the database:", error);
    }
})();

export default sequelize