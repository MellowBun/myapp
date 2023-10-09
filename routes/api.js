var express = require('express');
var router = express.Router();

var petRouter = require('./pet');

// print the request body for every request that hits the system.
router.use((req, res, next) => {
  req.body.userid = 1234567;
  console.log("The request body has: ", req.body)

  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use('/pets', petRouter);

module.exports = router;
