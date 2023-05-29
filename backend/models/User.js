const mongoose = require('mongoose');
const uri = process.env.dataBaseLink || 'mongodb://localhost:27017/UserDatabase';
mongoose.connect(uri);

const Schema = new mongoose.Schema({
    email:String,
    name:String,
    lname:String,
    password:String
});

const User = mongoose.model('userRegister',Schema);
module.exports = User;