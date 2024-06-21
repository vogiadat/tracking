import * as bcrypt from "bcrypt"
import { DataTypes } from "sequelize"
import sequelize from "@/database/config"

const TrackingStatus = sequelize.define("Tracking", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
})

export default TrackingStatus