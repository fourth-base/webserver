var express = require('express');
var router = express.Router();

router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'chat' });
});
router.get('/call', function(req, res, next) {
  res.render('call', { title: 'call' });
});
router.get('/video', function(req, res, next) {
  res.render('video', { title: 'video' });
});


module.exports = router;
