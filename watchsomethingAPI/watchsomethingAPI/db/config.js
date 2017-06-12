var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

// Set up Database
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

module.exports = db;