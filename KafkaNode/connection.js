const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 8080,
    password: "midhat",
    database: "postgres"
})

module.exports = client