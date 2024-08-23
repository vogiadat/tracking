const { connect } = require('./config/db')
const express = require('express')
const { PORT } = require('./config/const')
const router = require('./routes')
const path = require('path')
const session = require('express-session')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  session({
    secret: 'ajsldhfaklshfgjkasdbnvqedladjlaksjdklasjdkl',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.render('index')
})

app.listen(PORT, () => {
  connect()
  console.log(`app listen in port: ${PORT}`)
})
