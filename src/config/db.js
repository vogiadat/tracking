const { Sequelize } = require('sequelize')
const { DB_NAME, DB_USER_NAME, DB_USER_PASSWORD, DB_HOST } = require('./const')

const sequelize = new Sequelize(DB_NAME, DB_USER_NAME, DB_USER_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql'
})

const connect = () => {
  sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error))
}

module.exports = {
  sequelize,
  connect
}
