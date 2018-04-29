var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SubSchema =  new Schema ({
    startdate:{
        type: Date,
        default: Date.now
    },
    nickname:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default: 0 
    },
    frequency:{
        type: String,
        default: "monthly"
    },
    reminder:{
        type: Date
    },
    text:{
        type:String
    },
    _userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    
});

var Subscription = mongoose.model("Subscription", SubSchema);

module.exports = Subscription;