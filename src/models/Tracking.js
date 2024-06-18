import * as bcrypt from "bcrypt"
import { DataTypes } from "sequelize"
import sequelize from "@/database/config"

const Tracking = sequelize.define("Tracking", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
})

export default Tracking