const mongoose = require('mongoose')

const planetSchema = new mongoose.Schema({
    name: {type: String, required: true},
    radius: Number,
    hasRings: Boolean,
    orbitalPeriod: Number
})

module.exports = mongoose.model('Planet', planetSchema)