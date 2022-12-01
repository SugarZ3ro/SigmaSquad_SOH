const mongoose = require('mongoose');

const nft = new mongoose.Schema({
    username:{
        type:String,
        },
        count:{
        type:Number,
    }
}
)
module.exports = mongoose.model("nft" , nft)