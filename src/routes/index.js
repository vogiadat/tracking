const { Router } = require('express')
const expressAsyncHandler = require('express-async-handler')
const { Tracking, TrackingItem } = require('../models')
const moment = require('moment')
const { ADMIN_USERNAME, ADMIN_PASSWORD } = require('../config/const')
const { isAuthenticated } = require('../middlewares')

const router = Router()

// Login route
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  const { username, password } = req.body
  console.log({username, password})
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    req.session.isAuthenticated = true
    res.redirect('/admin/tracking')
  } else {
    res.render('login', { error: 'Invalid credentials' })
  }
})

// Logout route
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/login')
  })
})

router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const trackings = await Tracking.findAll({ limit: 1 })
    res.render('index')
  })
)

router.get(
  '/admin/tracking',
  isAuthenticated,
  expressAsyncHandler(async (req, res) => {
    const trackings = await Tracking.findAll()
    res.render('tracking/index', { trackings })
  })
)

router.get(
  '/tracking/create',
  isAuthenticated,
  expressAsyncHandler(async (req, res) => {
    res.render('tracking/create')
  })
)

router.post('/tracking/create', isAuthenticated, async (req, res) => {
  try {
    await Tracking.create({
      trackingNumber: req.body.trackingNumber,
      from: req.body.from,
      to: req.body.to,
      dateSend: req.body.dateSend,
      estimateReceivedDay: req.body.estimateReceivedDay,
      services: req.body.services,
      terms: req.body.terms,
      packaging: req.body.packaging,
      totalPackage: req.body.totalPackage
    })

    res.redirect('/admin/tracking')
  } catch (error) {
    console.error('Error creating new tracking:', error)
    res.status(500).send('Error creating new tracking')
  }
})

router.get('/tracking/details/:id', isAuthenticated, async (req, res) => {
  try {
    const id = req.params.id
    const tracking = await Tracking.findByPk(id)

    if (tracking) {
      res.render('tracking/details', { tracking })
    } else {
      res.status(404).send('Tracking not found')
    }
  } catch (error) {
    console.error('Error fetching tracking details:', error)
    res.status(500).send('Error fetching tracking details')
  }
})

router.put('/tracking/update/:id', isAuthenticated, async (req, res) => {
  try {
    const id = req.params.id

    const [updatedRows] = await Tracking.update(
      {
        trackingNumber: req.body.trackingNumber,
        from: req.body.from,
        to: req.body.to,
        dateSend: req.body.dateSend,
        estimateReceivedDay: req.body.estimateReceivedDay,
        services: req.body.services,
        terms: req.body.terms,
        packaging: req.body.packaging,
        totalPackage: req.body.totalPackage
      },
      {
        where: {
          id
        }
      }
    )

    if (updatedRows > 0) {
      res.json({ message: 'Tracking updated successfully' })
    } else {
      res.status(404).json({ message: 'Tracking not found' })
    }
  } catch (error) {
    console.error('Error updating tracking:', error)
    res.status(500).json({ message: 'Error updating tracking' })
  }
})

router.delete('/tracking/delete/:id', isAuthenticated, async (req, res) => {
  try {
    const id = req.params.id
    const deletedTracking = await Tracking.destroy({
      where: { id: id }
    })

    if (deletedTracking) {
      res.json({ message: 'Tracking deleted successfully' })
    } else {
      res.status(404).json({ message: 'Tracking not found' })
    }
  } catch (error) {
    console.error('Error deleting tracking:', error)
    res.status(500).json({ message: 'Error deleting tracking' })
  }
})

router.get('/tracking/items/:id', isAuthenticated, async (req, res) => {
  try {
    const id = req.params.id
    const tracking = await Tracking.findByPk(id)
    const trackingItems = await TrackingItem.findAll({ where: { trackingId: id } })

    if (tracking) {
      res.render('tracking/trackingItems', { tracking, trackingItems })
    } else {
      res.status(404).send('Tracking not found')
    }
  } catch (error) {
    console.error('Error fetching tracking items:', error)
    res.status(500).send('Error fetching tracking items')
  }
})

// POST route to create a new tracking item
router.post('/tracking/items/create', isAuthenticated, async (req, res) => {
  try {
    const newItem = await TrackingItem.create(req.body)
    res.status(201).json(newItem)
  } catch (error) {
    console.error('Error creating tracking item:', error)
    res.status(500).json({ message: 'Error creating tracking item' })
  }
})

// DELETE route to remove a tracking item
router.delete('/tracking/items/delete/:id', isAuthenticated, async (req, res) => {
  try {
    const id = req.params.id
    const deletedItem = await TrackingItem.destroy({ where: { id: id } })

    if (deletedItem) {
      res.json({ message: 'Tracking item deleted successfully' })
    } else {
      res.status(404).json({ message: 'Tracking item not found' })
    }
  } catch (error) {
    console.error('Error deleting tracking item:', error)
    res.status(500).json({ message: 'Error deleting tracking item' })
  }
})

router.get(
  '/tracking_public/search',
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
