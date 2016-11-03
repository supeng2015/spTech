var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SP的技术文档' });
});
router.post('/myupload', function(req, res, next) {

  console.log(req.body);
  res.json({
    text : '上传成功'	
  })
});
router.get('/myupload', function(req, res, next) {
  console.log(req);
  res.json({
    text : '上传成功'	
  })
});

module.exports = router;
