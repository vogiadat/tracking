const Tracking = require('./Tracking')
const TrackingItem = require('./TrackingItem')

TrackingItem.belongsTo(Tracking, { as: 'tracking', foreignKey: 'trackingId' })
Tracking.hasMany(TrackingItem, { as: 'trackingItems', foreignKey: 'trackingId', sourceKey: 'id' })
// Tracking.sync({ alter: true })
// TrackingItem.sync({ alter: true })
module.exports = { Tracking, TrackingItem }
