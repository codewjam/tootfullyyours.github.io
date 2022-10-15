require('./models/db');
const bodyparser = require('body-parser');
const path = require("path");
const assert = require('assert');
const express = require('express')

const financemodel = require('./models/finance.model');
const financeController = require('./controllers/financeController');

const app = express()

const port = 3000


app.use('/finance', financeController);
//Static Files for css and js and img
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))

app.use(express.static('public'))
app.use('js',express.static(__dirname + 'public/js'))

app.use(express.static('public'))
app.use('img',express.static(__dirname + 'public/img'))

//set views
app.set('views', path.join(__dirname,'./views'));
//set engine
app.set('view engine', 'ejs')
//request finance db


//export router controller for CRUD operations





app.get('/', (req,res) =>{
console.log("here")
res.render('index')

})


//create a data schema

const finance =  {

    patientRevenue:{
    
        type:Number
    },
    
    totalIncome:{
    
        type:Number
    },
    
    grossProfit:{
    
        type:Number
    },
    
    
    
    dentalSupplies:{
    
        type:Number
    },
    
    laboratoryfee:{
    
        type:Number
    },
    
    staffPayroll:{
    
        type:Number
    },
    
    Marketing:{
    
        type:Number
    },
    
    
    rent:{
    
        type:Number
    },
    
    
    generalAdmin:{
    
        type:Number
    },
    
    totalExpense:{
    
        type:Number
    },
    
    interestIncome:{
    
        type:Number
    },
    
    totalOtherIncome:{
    
        type:Number
    },
    
    otherExpenses:{
    
        type:Number
    },
    
    totalOtherExpenses:{
    
        type:Number
    },
    
    
    netIncome:{
    
        type:Number
    },
    
    
    }
    
    

    app.post("/", function(req,res){

let Finance = new finance({

    patientRevenue: req.body.patientRev1,
    totalIncome: req.body.totalInc1,
    grossProfit:req.body.gp1,
    dentalSupplies:req.body.dps1,
    laboratoryfee:req.body.labfee1,
    staffPayroll:req.body.payroll1,
    Marketingreq:req.body.marketing1,
    rent:req.body.rent1,
    generalAdmin:req.body.admin1,
    totalExpense:req.body.totalexpense1,
    interestIncome:req.body.interestInc1,
    totalOtherIncome:req.body.otherIncome1,
    otherExpenses:req.body.otherExpense1,
    totalOtherExpenses:req.body.totalOEx1,
    netIncome:req.body.netInc1,
});

Finance.save();


    })


    

//creating new object note


app.listen(port,()=>console.info( `listening to port ${port}`))
