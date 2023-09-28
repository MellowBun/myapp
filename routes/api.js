var express = require('express');
var router = express.Router();

var petRouter = require('./pet');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use('/pets', petRouter);

module.exports = router;
