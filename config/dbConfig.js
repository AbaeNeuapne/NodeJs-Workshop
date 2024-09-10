const db = require("../model")

const databaseConfig = {
    db : process.env.DB,
    username: process.env.USERNAME2,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    // port: 3306,             //for local host
    port: 11073,         //for online host
    dialect: 'mysql'
}

module.exports = databaseConfig
