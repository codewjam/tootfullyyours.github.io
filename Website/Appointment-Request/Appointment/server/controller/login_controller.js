var NewUserdb = require('../model/login_model')
const bcrypt = require("bcrypt")

// create and save new appointmentRequest
exports.create = (req,res)=>{
    // validate request
    const {username, email, password, password2} = req.body;
    let errors = []

    // Check required fields
    if(!username || !email || !password || !password2){
        errors.push({message: "Please fill in all fields"})
    }

    // Check password match
    if(password !== password2){
        errors.push({message: "Password do not match"})
    }

    if (errors.length > 0){
        res.render("register_body", {
            errors, username, email, password, password2
        })
    }else{
        NewUserdb.findOne({p_email: email}).then(user =>{
            if(user){
                errors.push({message: "Email is already registered"});
                res.render("register_body", {
                    errors, username, email, password, password2
                });
            } else{
                const User = new NewUserdb({
                    p_username: req.body.username,
                    p_email: req.body.email,
                    p_password: req.body.password
                
                });

                // new password hash

                bcrypt.genSalt(10, (err, salt)=> bcrypt.hash(User.p_password, salt, (err, hash)=>{
                    if(err) throw err;

                    User.p_password = hash;
                    User.save()
                    .then(user =>{
                        res.redirect('/login')
                    })
                    .catch(err=> console.log(err))
                }))
            }
           
        })
    }



 

    
}