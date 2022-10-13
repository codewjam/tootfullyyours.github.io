var NewUserdb = require('../model/login_model')

// create and save new appointmentRequest
exports.create = (req,res)=>{
    // validate request

    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const User = new NewUserdb({
        p_username: req.body.p_username,
        p_email: req.body.p_email,
        p_password: req.body.p_password,
        p_cpassword: req.body.p_cpassword,

     
    })

    // save appointmentRequest in the database

    User
        .save(User)
        .then(data =>{
            res.send(data);
        })
<<<<<<< HEAD
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
                        req.flash('success_msg', 'You are now registered!');
                        res.redirect('/login');
                    })
                    .catch(err=> console.log(err))
                }))
            }
           
        })
    }
=======
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });
>>>>>>> parent of bc832ad (progess 5)


}