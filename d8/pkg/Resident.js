const mongoose = require('mongoose');

const Resident = mongoose.model('residents',{
    name:String,
    hasCar:Boolean,
    isBoomer:Boolean

})

module.exports = Resident;