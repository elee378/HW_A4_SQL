var express = require('express');
var connect = require('../utils/sqlConnect')
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  connect.query('SELECT * FROM mainmodel', (err, result) => {
  	if (err) {
  		throw err; console.log(err);
  	}else{
  		console.log(result);

  		res.render('home', { title: 'A selection of minis', message : "handlebars is awesome", carData : result });
  	}
  });	
});

module.exports = router;
