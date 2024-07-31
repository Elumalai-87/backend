const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
   memberNumber : Number ,
   name : String,
   gender : String,
   language : String,
   slang : String,
   age : [Number]
});


module.exports = mongoose.model('artist', DataSchema)