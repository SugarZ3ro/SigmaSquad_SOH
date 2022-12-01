const mongoose = require('mongoose');

const Feedback = new mongoose.Schema({
    name:{
        type:String,
    },
    star:{
        type:String,
    },
    
    address:{
        type:String,
    },
    
    feedback:{
        type:String,
    },
},
{timestamps: true}
)

module.exports = mongoose.model("Feedback" , Feedback)