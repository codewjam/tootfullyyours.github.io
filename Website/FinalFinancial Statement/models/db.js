const mongoose = require('mongoose');
var url = "mongodb+srv://Jam:1234@cluster0.2beacjj.mongodb.net/test"
mongoose.connect(url,(err,db)=>{

if (!err){console.log('MongoDB Connectino Suceeded.')}
else {console.log("Error in DB Connection: " + err)}

} );

require('./finance.model');