const mongoose = require('mongoose');

const Req = new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    city:{
        type:String,
        
    },
    area:{
        type:String,
        
    },
    state:{
        type:String,
        
    },
    address:{
        type:String,
          
    },
    lat:{
        type:String,
        required:true
    },
    lng:{
        type:String,
        required:true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Req" , Req)