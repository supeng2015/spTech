var mongoose = require('../model/conn');
//模型
//console.log(mongoose);
var user = mongoose.Schema({
    username : String,
    password : String,
    img : String,
    level : Number
});
//模型匹配到数据库里对应的文档集合
var User = mongoose.model('User', user)

User.prototype.saveOndDate = function(obj,fn){
  obj.save(function(err){
    console.log('存储成功了');
    fn();
  }) 
};

// var supeng = new User({ 
//   name : 'suxiaomao',
//   password : 'sp3371446',
//   img : 'bbb.jpg',
//   level : 1  
// })
// supeng.save(function(err, fluffy){
//   console.log('存储成功了');
// });

module.exports = User;
