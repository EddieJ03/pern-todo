// Establish a connection with Pool

// Why: Connecting a new client to the PostgreSQL server requires a handshake which can take 20-30 milliseconds. During this time passwords are negotiated, SSL may be established, and configuration information is shared with the client & server. Incurring this cost every time we want to execute a query would substantially slow down our application.

// get Pool property from pg package
const Pool = require('pg').Pool

// create new pool
const pool = new Pool({
    user: "postgres",
    password: "esfJ0$98%121",
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

module.exports = pool