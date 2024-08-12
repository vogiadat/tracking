require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 5050,
  DB_USER_NAME: process.env.DB_USER_NAME,
  DB_USER_PASSWORD: process.env.DB_USER_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  ADMIN_USERNAME: 'admin',
  ADMIN_PASSWORD: 'qwtzchjgj123'
}
