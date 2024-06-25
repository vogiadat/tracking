import User from './User'
import Tracking from './Tracking'
import TrackingItem from './TrackingItem'

TrackingItem.belongsTo(Tracking, { as: 'tracking', foreignKey: 'trackingId' })
Tracking.hasMany(TrackingItem, { as: 'trackingItems', foreignKey: 'trackingId', sourceKey: 'id' })
// TrackingItem.sync({ alter: true })
export { User, Tracking, TrackingItem }
