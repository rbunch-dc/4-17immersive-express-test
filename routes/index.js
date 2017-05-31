var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var students = ['Guido','Porscha','Hayes','Nick','Daniel'];
  	res.render('index', { 
  		title: 'Express', 
  		studentsArray: students 
  	});
});

router.get('/test', function(req, res, next){
	res.send('<h1>Router Check!</h1>');
});

module.exports = router;
