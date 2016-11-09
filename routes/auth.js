var express = require('express');
var router = express.Router();
var user = require('../model/user');

router.get('/login', function(req, res, next) {
  res.render('login', {
  	title:'登陆',
  	t : 'l'
  });
});
router.post('/login',function(req,res,next){
});
router.get('/register', function(req, res, next) {
  res.render('login', { 
  	title: '注册',
    t : 'r'
  });
});
router.post('/register',function(req,res,next){
  var createOneUser = new user({ 
    username : req.body.username,
    password : req.body.password,
    img : '',
    level : 2  
  });
  createOneUser.saveOndDate(createOneUser,function(){
    res.json({
      test : '恭喜注册成功'	
    }) 	
  });
});

module.exports = router;