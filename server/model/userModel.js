const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema({
    name:String,
    email:String,
    phone:Number
});

exports.model = mongoose.model('user', blogSchema);