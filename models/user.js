var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema =  new Schema ({

    name:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true,
        default: 0 
    },
    duration:{
        type: String,
        default: "monthly"
    },
    FbId:{
        type: String,
        required: true
    }
    
});

var User = mongoose.model("User", UserSchema);

module.exports = User;