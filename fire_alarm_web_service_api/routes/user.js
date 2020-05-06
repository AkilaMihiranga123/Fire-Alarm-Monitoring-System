const express =  require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

//implement route for get all user details.
//if request was success then pass the success message and relevant all user details
//if in an error,then pass the error status.
router.route('/').get((req,res) => {
    User.find()
        .then(users => res.status(200).json({ status: "Success", data: users }))
        .catch(() => res.status(400).json({ status: "Error", data:{} }));
});

//Register Handle
//implement route for new users register to the system.
router.route('/register').post((req, res) => {
    const { name,email, mobile, password } = req.body;
    //if already registered email using to register, then show error status.
    User.findOne({email:email})
        .then(user => {
            if(user){
                res.status(400).json({ status: "Error", data:{} });
            } else {
                //if not then new user details added to new User object.
                const newUser = new User({
                    name,
                    email,
                    mobile,
                    password
                });
                //secure the password, then it hash using bcrypt
                bcrypt.genSalt(10, (err, salt) => 
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            //Set password to hashed
                            newUser.password = hash;
                            //Save new user details.
                            //if process was success,then pass the new user details as data and success as the status.
                            //Or registration goes wrong,then pass error status.
                            newUser.save()
                                .then((user) => res.status(200).json({ status: "Success", data: user }))
                                .catch(() => res.status(400).json({ status: "Error", data: {} }));
                    })); 
            }
        });

});


//Login Handle
//implement route for user login
router.route('/login').post((req,res) => {
    //find specific user according to the email
    User.findOne({
        email: req.body.email
    })
        //then check whether email and password are matched.
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload = {
                    _id : user._id,
                    name: user.name,
                    mobile: user.mobile,
                    email: user.email
                }
                //then password and email matched then pass success status and Authorized as the message.
                res.status(200).json({ status: "Success", msg: "Authorized" });
            }else {
                //then password and email not matched then pass error status and Unauthorized as the message.
                res.status(400).json({ status: "Error", msg: "Unauthorized" });
            }
        }else {
            //if email not found, then send error status and message.
            res.status(400).json({ status: "Error", msg: "Unauthorized" });
        }
    })
    .catch(err => {
        //if user not found, then send error status.
        res.status(400).json({ status: "Error", msg: "Unauthorized" });
    })
});


module.exports = router;