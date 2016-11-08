var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login', {
  	title:'登陆',
  	t : 'l'
  });
});

router.post('/login',function(req,res,next){
  
})


router.get('/register', function(req, res, next) {
  res.render('login', { 
  	title: '注册',
    t : 'r'
  });
});


module.exports = router;