var mongoose = require('mongoose')

var citySchema = mongoose.Schema({
    name: String,
    desc: String,
    img: String,
    temp_min: Number,
    temp_max: Number,
    longitude: Number, 
    latitude: Number
})

var cityModel = mongoose.model('cities', citySchema)

module.exports = cityModel;