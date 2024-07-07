const { Router } = require('express')
const expressAsyncHandler = require('express-async-handler')
const { Tracking, TrackingItem } = require('../models')
const moment = require('moment')

const router = Router()

router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const trackings = await Tracking.findAll()
    res.render('index')
  })
)

router.get(
  '/tracking/search',
  expressAsyncHandler(async (req, res) => {
    const { trackingNumber } = req.query

    const tracking = await Tracking.findOne({
      where: {
        trackingNumber
      }
    })

    const trackingItems = await TrackingItem.findAll({
      where: {
        trackingId: tracking.id
      }
    })

    res.render('tracking/tracking-details', { tracking, trackingItems, moment })
  })
)

module.exports = router
