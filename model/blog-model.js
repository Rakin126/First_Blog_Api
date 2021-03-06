const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    } ,
    description :{
        type: String,
        required : true
    } ,
    author :{
        type: String,
        required : true
    } ,
})

module.exports = mongoose.model('blogs', blogSchema)