const mongoose = require('mongoose');

const QR = new mongoose.Schema({
    pid:{
        type:String,
        unique:true
    },
    pCompany:{
        type:String,
    },
    pType:{
        type:String,
    },

},
{timestamps: true}
)

module.exports = mongoose.model("QR" , QR)