// Check


const express = require('express');
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
const services1 = require("../services/employee_render");
const controller1 = require("../controller/employee_controller");
const services2 = require("../services/history_render");
const controller2 = require("../controller/history_controller");
const controller3 = require("../controller/login_controller");

var appointmentRequestdb = require('../model/model')
var Historydb = require('../model/history_model')
var Appointdb = require('../model/appointment_model')
var NewUserdb = require('../model/login_model')


// Routes for Home Route/Starting Route

route.get('/Request', services.Request)


// Routes for Appointments

route.get('/appointment', services.Appointment);
route.get('/appointment-data', controller.find_appointment);
route.delete('/appointment/:id', controller.delete_appointment);


// Routes for Appointmment Request


route.get('/add-appointmentRequest', services.add_appointmentRequest);
route.post('/api/appointmentRequest', controller.create);
route.get('/api/appointmentRequest', controller.find);
route.delete('/api/appointmentRequest/:id', controller.delete);

// Routes for Adding, Viewing, Updating, and Deleting Employee


route.get('/employee', services1.Employee)
route.get('/add-employee', services1.add_employee);
route.get('/update-employee', services1.update_employee);
route.get('/view-employee', services1.view_employee);

route.post('/api/employee', controller1.create);
route.get('/api/employee', controller1.find);
route.put('/api/employee/:id', controller1.update);
route.delete('/api/employee/:id', controller1.delete);
route.get('/api/employee/:id', controller.find);


// Routes for Patient History Transactions


route.get('/history', services2.history);
route.get('/add-history', services2.add_history);
route.get('/update-history', services2.update_history);

route.post('/history', controller2.create);
route.get('/history-data', controller2.find);
route.put('/history/:id', controller2.update);
route.delete('/history/:id', controller2.delete);

// Login



//Go to login page

route.get("/login", (req, res)=>{
    res.render("login_body", {title: 'Log-in'})
})


// Register


route.post('/register', controller3.create);
route.get("/register", (req, res)=>{
    res.render("register_body", {title: 'User Registration'})
})


// login user
route.post('/login',(req, res)=>{
    var email = req.body.email
    var username = req.body.username
    var password = req.body.password

    if((email == NewUserdb.findOne({p_email: email}) || username == NewUserdb.findOne({p_username: username})) && password == NewUserdb.find({p_password: password})){
        res.redirect('/add-appointmentRequest');

    }else{
        res.end("Invalid Username!")
    }   
})

//route for appointmentRequest


route.get("/add-appointmentRequest", (req, res)=>{
    
        res.render("add_appointmentRequest")
 
})

//route for register



route.post('/login',(req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        res.redirect('/add-appointmentRequest');

    }else{
        res.end("Invalid Username!")
    }   
})


//route for logout

route.get('/logout', (req, res) =>{

    res.render("home_body", {title: "ToothFully", logout: "Logout Successfully"})
})

 route.get('/', (req, res) =>{
     res.render("home_body", {title: "ToothFully"})
})

//route for about us

route.get('/aboutUs', (req, res) =>{
    res.render("about-us_body",{title: "About Us"})
})

route.get('/about-us', (req, res) =>{
    res.render("about-us-no-account_body",{title: "About Us"})
})



module.exports = route