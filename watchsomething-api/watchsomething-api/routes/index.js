var express = require('express');
var router = express.Router();
var db = require('../db/queries');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* ADD ALL MOVIES */
router.get('/addMovies', db.addMovies);
/* GET ALL MOVIES */
router.get('/getAllMovies', db.getAllMovies);
/* GET ONE MOVIE */
router.get('/getOneMovie/:id', db.getOneMovie);
/* GET BASED ON USER SELECT */
router.get('/getMovie/:year/:genre', db.getUserSelect);


/* GET ALL MOVIE GENRES*/
router.get('/getMovieGenres', db.getMovieGenres);
/* ADD ALL MOVIE GENRES*/
router.get('/addMovieGenres', db.addMovieGenres);

/* GET AMAZON MOVIE LINK */
router.get('/getMovieLink/:title', db.getMovieLink);
/* TEST FIRST WITH HARD CODED LINK */
/*router.get('/getMovieLink', db.getMovieLink);
router.get('/myxml', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../', 'tester.xml'));
});*/

/* DELETE MOVIE */
router.delete('/deleteMovie/:ID', db.deleteMovie);

module.exports = router;
