var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Color Picker', num: 0 });
});

router.post('/index', function(req, res, next) {
  res.render('index', {title: 'Color Picker', num: req.body.number});
});

module.exports = router;
