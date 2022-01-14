const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "festival",
    password: "140501",
    port: 5432,
});

module.exports = pool;