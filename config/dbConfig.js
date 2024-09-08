const db = require("../model")

const databaseConfig = {
    db : process.env.DB,
    username: process.env.USERNAME2,
    password: process.env.PASSWORD,
    host: process.env.host,
    port: 27200,
    dialect: 'mysql',
}

module.exports = databaseConfig