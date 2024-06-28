import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  host: 'localhost',
  port: 3306,
  username: 'chinapos_user_tracking',
  password: '@(MteaaEi%d,',
  database: 'chinapos_tracking',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  benchmark: true,
  logging: false
})

;(async () => {
  try {
    await sequelize.authenticate()
    console.info('Success ::: Connection has been established successfully.')

    // Sync defined models to the database
    // await sequelize.sync({ alter: true }) // This will create tables if they don't exist or update the existing ones
    return
  } catch (error) {
    console.error('Error ::: Unable to connect to the database:', error)
  }
})()

export default sequelize
