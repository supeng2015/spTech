var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var path = require('path');
var catalog = require('../middleware/catalog.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.username="supeng";
  req.session.password="123456"
  res.render('index', { title: 'SP的技术文档' });
});
router.post('/myupload', function(req, res, next) {
  res.json({
    text : '上传成功'	
  })
});

var multipartMiddleware = multipart();

//nodeuploadimgae
router.post('/nodeimagesubmit',multipartMiddleware,function(req,res,next){ 
  var img = req.files.photo.image;
  //console.log(express.static);
  // console.log(img);
  
  // var name = req.body.photo.name || img.name;
  
  // fs.rename(img.path, path, function(err){
  //   res.render('index',{title:'succse'});	
  // });    
  res.render('index',{title:'succse'});
});
module.exports = router;
