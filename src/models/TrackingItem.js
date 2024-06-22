import { DataTypes } from "sequelize"
import sequelize from "@/database/config"
import Tracking from "./Tracking"

const TrackingItem = sequelize.define("TrackingItem", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    trackingId: {
        type: DataTypes.UUID,
    },
}, {
    timestamps: true,
})

export default TrackingItem