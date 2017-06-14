var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

// SET UP THE DATABASE
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

// AXIOS
let axios = require('axios');

/* GENRE ARR TO USE IN ADD MOVIES */

let catchGenre = [];


/* GET ALL MOVIES */
function getAllMovies(req, res, next) {
	db.any('SELECT * FROM movies')
	  // .then((data) => { res.json({ allMovies: data}); })
	  .then((data) => { res.status(200).json({ AllMovies: data}); })
	  .catch((err) => { return next(err); });
}


function addMovies(req, res, next) {
	/* HOW TO GET MOVIE GENRE OBJECT IN THIS FUNCTION TO USE IN SECOND PART OF LOOP???*/



for ( let i = 2014; i <= 2017; i +=1 ) {
	/* I want the genre variable defined in add movie genres available in here */
	/* HARD CODED GENRE IDS*/
	let arr = [28,12,35,80,99,10751,16,18,14,36,27,10402,9648,10749,878,10770,53,10752,37]

	for (let z = 0; z <= arr.length; z += 1) {
	let year = i;
	let genreID = arr[z];	
	// let genreID = genreRES[z].genre_id;	
	const tmdbaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=c164eb6c6f7dce7530f80aea43fe7bb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&with_genres=${genreID}`
	axios.get(tmdbaseURL)
		.then((res) => {
			// console.log(res.data.results)
			movies = res.data.results
			movies.map( (element, index) => {
				let extYear = parseInt(element.release_date.split('-')[0]);
				db.none('INSERT INTO movies (title, posterpath, overview, year, genre_id_1, genre_id_2, genre_id_3)' + 'VALUES ($1, $2, $3, $4, $5, $6, $7)',
				[ element.title, 'http://image.tmdb.org/t/p/w185/' + element.poster_path, element.overview, extYear, element.genre_ids[0], element.genre_ids[1], element.genre_ids[2] ])
				.then((data) => { console.log('movies added to database') })
				.catch((err) => { return next(err); });
			})
		});
	}}
}


/* ADD MOVIE GENRES */
function addMovieGenres(req, res, next) {
	const genreURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=c164eb6c6f7dce7530f80aea43fe7bb8&language=en-US"
	axios.get(genreURL) 
	.then((res) => {
		let genre = res.data.genres
/* trying to do a closure here I want to get this genre value out and use it in add movies */
		genre.map((element, index) => {
		db.none('INSERT INTO genres (genre_id, name)' + 'VALUES ($1, $2)',
		[element.id, element.name])
		/* SERVE ERR RESPONSES*/
		})
	})
}
/* GET MOVIE GENRES */
function getMovieGenres(req, res, next) {
	db.any('SELECT * FROM genres')
	  // .then((data) => { res.json({ allMovies: data}); })
	  .then((data) => { res.status(200).json({ genres: data}); })
	  .catch((err) => { return next(err); });
}
/* GET ONE MOVIE*/
function getOneMovie(req,res,next) {
	let id = parseInt(req.params.id);
	db.any('SELECT * FROM movies WHERE id =' + id)
	.then((data) => { res.status(200).json({ movie: data }) })
	.catch((err) => { return next(err); });
}
/* GET USER SELECTED MOVIE */
function getUserSelect(req, res, next){
	let genreID = parseInt(req.params.genre);
	let year = parseInt(req.params.year);
	db.any(`SELECT * FROM movies WHERE year=${year} AND genre_id_1=${genreID} OR year=${year} AND genre_id_2=${genreID} OR year=${year} AND genre_id_3=${genreID}`)
	.then((data) => { res.status(200).json({ userSelect: data}) })
	.catch((err) => { return next(err); });
}


module.exports = {
	addMovies: addMovies,
	getAllMovies: getAllMovies,
	getOneMovie: getOneMovie,
	addMovieGenres: addMovieGenres,
	getMovieGenres: getMovieGenres,
	getUserSelect: getUserSelect,
}


