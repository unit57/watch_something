var express = require('express');
var router = express.Router();
var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* ROUTE TO GET ALL MOVIES */
router.get('/getAllMovies', db.getAllMovies);

/* ROUTE TO ADD MOVIES */
router.get('/addMovies', db.addMovies);



module.exports = router;
