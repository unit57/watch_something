var express = require('express');
var router = express.Router();
var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* ROUTE TO GET ALL MOVIES */
router.get('/getallmovies', db.getAllMovies);



module.exports = router;
