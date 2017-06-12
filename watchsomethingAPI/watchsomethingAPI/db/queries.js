var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

// SET UP THE DATABASE
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

// AXIOS
let axios = require('axios');

/* GET ALL MOVIES */
function getAllMovies(req, res, next) {
	db.any('SELECT * FROM movies')
	  // .then((data) => { res.json({ allMovies: data}); })
	  .then((data) => { res.status(200).json({ AllMovies: data}); })
	  .catch((err) => { return next(err); });
}

function addMovies(req, res, next) {
	/* TEST WITH ON QUERY, WILL HAVE TO BE A LOOP TO GET ALL THE MOVIES I NEED */
	const tmdbaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=c164eb6c6f7dce7530f80aea43fe7bb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"

	axios.get(tmdbaseURL)
		.then((res) => {
			// console.log(res.data.results)
			movies = res.data.results
			movies.map( (element, index) => {
				console.log(element)
				db.none('INSERT INTO movies (title, posterpath, overview, genre_id_1, genre_id_2, genre_id_3)' + 'VALUES ($1, $2, $3, $4, $5, $6)',
				[ element.title, 'http://image.tmdb.org/t/p/w185/' + element.poster_path, element.overview, element.genre_ids[0], element.genre_ids[1], element.genre_ids[2] ]);
			})
		});
}


module.exports = {
	getAllMovies: getAllMovies,
	addMovies: addMovies
}


