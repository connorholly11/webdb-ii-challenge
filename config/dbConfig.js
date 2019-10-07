const knex = require("knex");

const config = require("../knexfile");

// we must select the development object from our knexfile
const db = knex(config.development);

module.exports = db;
