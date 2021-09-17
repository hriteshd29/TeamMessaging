const mongoose = require('mongoose');
var uri = "mongodb://608d4803b178494153d503ea:c22os24ttskr4j5d0xc22os24ttskr4j5d0y@128.199.17.119:3002/c22os24ttskr4j5d0w?authSource=admin"
function init(callback){
    mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    
    const db = mongoose.connection;
    db.on('error', function(err){
        console.log("error"+err);
        callback(err)
    })
    
    db.once('open', function(){
        console.log("database is connected");
        callback(null)
    })
}

module.exports = init;

