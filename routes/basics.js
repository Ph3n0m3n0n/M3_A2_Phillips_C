var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('basics', { title: 'ACME Services' });
});

module.exports = router;
