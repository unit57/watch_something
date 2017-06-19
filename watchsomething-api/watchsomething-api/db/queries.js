var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

//console.log(xmltest)

// SET UP THE DATABASE
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

/* Cheerio */
var cheerio = require('cheerio');

/* AMAZON API */
var amazon = require('amazon-product-api');
/* Create AMAZON Client */
var client = amazon.createClient({
  awsId: process.env.AWSID,
  awsSecret: process.env.AWS_SECRET,
  awsTag: process.env.AWSTAG 
});

// AXIOS
let axios = require('axios');

/* GENRE ARR TO USE IN ADD MOVIES */

/* Was attempting a closure in the get genre method */
let catchGenre = [];





/* GET ALL MOVIES */
function getAllMovies(req, res, next) {
	db.any('SELECT * FROM movies')
	  // .then((data) => { res.json({ allMovies: data}); })
	  .then((data) => { res.status(200).json({ AllMovies: data}); })
	  .catch((err) => { return next(err); });
}
/* top movies: for each year loop through each genre and insert in to db  */
/* Year loop will have to be refactored into a set iterval or set time out inorder to avoid rate limits */
function addMovies(req, res, next) {
	/* HOW TO GET MOVIE GENRE OBJECT IN THIS FUNCTION TO USE IN SECOND PART OF LOOP???*/

for ( let i = 1980; i <= 2017; i +=1 ) {
	/* I want the genre variable defined in add movie genres available in here */
	/* HARD CODED GENRE IDS*/
	let arr = [28,12,35,80,99,10751,16,18,14,36,27,10402,9648,10749,878,10770,53,10752,37]

	for (let z = 0; z <= arr.length; z += 1) {
	let year = i;
	let genreID = arr[z];	
	// let genreID = genreRES[z].genre_id;	
	const tmdbaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${ process.env.TMDB_KEY }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}&with_genres=${genreID}`
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
	/* This query was tricky but works - it's how I get a decade at a time */
	db.any(`SELECT * FROM movies WHERE year>=${year} AND year<=${year + 10} AND genre_id_1=${genreID} OR year>=${year} AND year<=${year + 10} AND genre_id_2=${genreID} OR year>=${year} AND year<=${year + 10} AND genre_id_3=${genreID}`)
	
	.then((data) => { res.status(200).json({ userSelect: data}) })
	.catch((err) => { return next(err); });
}

/* Send in a title and get a responce from amazon with the Amazon Video Movie Link */
 function getMovieLink(req, res, next) {
	/* This was getting XML data and parsing it */
	/*amzURL = "http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAIFALS5TTB5AGKMYQ&AssociateTag=unit57-20&Keywords=back%20to%20the%20future&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=Movies&Service=AWSECommerceService&Timestamp=2017-06-15T20%3A57%3A36.000Z&Signature=w9ouKnHYxea%2FznGV%2BUp57QBiGSS9AaFJRHeqfStO6Gk%3D"
 	 //amzURL = "http://localhost:3000/myxml"
 	axios.get(amzURL)
		.then((res) => {
			 //console.log(res.data)
    	$ = cheerio.load(res.data, {xmlMode: true});
		console.log($('DetailPageURL').first().text())
		let movieURL = $('DetailPageURL').first().text() 
		return movieURL
		})
		.then((movieURL) => { res.json({ things: movieURL }) })
		.catch((err) => { return next(err); });
		*/
		/* the follwiging gets the movie title sent in apends it to an amazon produnt search using the npm amazon product api*/
		/* This package allows you to under in the amazon credentials as well and render a response as a JSON object (sorry Patrick - but I did learn so much about XML!) */
		let title = req.params.title
		client.itemSearch({
			  keywords: title,
			  searchIndex: 'Video',
			  responseGroup: 'ItemAttributes,Offers,Images'
			}).then(function(results){
			  let movieURL = results[0].DetailPageURL;
			  return movieURL
			})
			  .then((movieURL) => { res.json({ things: movieURL }) })
			.catch(function(err){
			  console.log(err);
			});
		}
		/* This doesn't work, I get a 404, but I tested this route with a get and console long so I know it must be in the function */
	function deleteMovie(req, res, next) {
		let movieID = parseInt(req.params.ID)
		db.result('DELETE FROM movies WHERE id =' + movieID)
		.then((result) => { res.status(200).json({ status: "movie deleted" }); })
      	.catch((err) => { return next(err); });

	
	}

module.exports = {
	addMovies: addMovies,
	getAllMovies: getAllMovies,
	getOneMovie: getOneMovie,
	addMovieGenres: addMovieGenres,
	getMovieGenres: getMovieGenres,
	getUserSelect: getUserSelect,
	getMovieLink: getMovieLink,
	deleteMovie: deleteMovie
}


