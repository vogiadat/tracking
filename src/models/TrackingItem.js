const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const TrackingItem = sequelize.define(
  'trackingitems',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true
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

module.exports = TrackingItem
