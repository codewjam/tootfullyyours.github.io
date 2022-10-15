const express = require('express');
const mongoose= require('mongoose');
const Finance = mongoose.model('Finance');
const  bodyparser = require("body-parser");
var router = express.Router();






router.get('/', (req,res)=>{

res.render("index")

});


router.post ('/',(req,res)=>{

insertRecrod(req,res);

})

function insertRecrod(req,res){


 let finance = new Finance({

    

 
    
})

    
    

};

module.exports = router;