import { DataTypes } from 'sequelize'
import sequelize from '@/database/config'

const TrackingItem = sequelize.define(
  'trackingitems',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trackingId: {
      type: DataTypes.UUID
    }
  },
  {
    timestamps: true
  }
)

export default TrackingItem
