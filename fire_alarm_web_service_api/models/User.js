const mongoose = require('mongoose');


//Create User model
//then this model for the database creation.
const UserSchema = new mongoose.Schema({
    //set name as String type value and is is required
    name: {
        type: String,
        required: true
    },
    //set email as String type value and is is required
    email: {
        type: String,
        required: true
    },
    //set mobile as String type value and is is required
    mobile: {
        type:String,
        required: true
    },
    //set password as String type value and is is required
    password: {
        type: String,
        required: true
    }
},{
    //set timestamps to get created and updated date and time.
    timestamps: true,
});

//create database table name called User.
const User = mongoose.model('User', UserSchema);

module.exports = User;