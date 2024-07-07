const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const Tracking = sequelize.define(
  'trackings',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    trackingNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateSend: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estimateReceivedDay: {
      type: DataTypes.STRING
    },
    services: {
      type: DataTypes.STRING
    },
    terms: {
      type: DataTypes.STRING
    },
    packaging: {
      type: DataTypes.STRING
    },
    totalPackage: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true
  }
)

module.exports = Tracking
