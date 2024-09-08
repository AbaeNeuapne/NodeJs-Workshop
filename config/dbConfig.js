const db = require("../model")

const databaseConfig = {
    db : process.env.DB,
    username: process.env.USERNAME2,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: 'mysql',
    port: process.env.PORT,
}

module.exports = databaseConfig