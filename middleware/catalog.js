var fs = require('fs');
var path = require('path');
var catalog = {
  name : 'supeng',
  mycatalog : function(){
    console.log(process);
    //var data = fs.readFileSync("aaa","utf-8");    
    //console.log(data);
  }
}
module.exports = catalog