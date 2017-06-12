var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

// SET UP THE DATABASE
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);


/* GET ALL MOVIES */
function getAllMovies(req, res, next){
	db.any('SELECT * FROM movies')
	  .then((data) => { res.json({ allMovies: data}); })
	  // .then((data) => { res.status(200).json({ AllMovies: data}); })
	  // .catch((err) => { return next(err); });
}


module.exports = {
	getAllMovies: getAllMovies,
}


