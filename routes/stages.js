var express = require('express');
var router = express.Router();

router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Express' });
});
router.get('/call', function(req, res, next) {
  res.render('call', { title: 'Express' });
});
router.get('/video', function(req, res, next) {
  res.render('video', { title: 'Express' });
});


module.exports = router;
