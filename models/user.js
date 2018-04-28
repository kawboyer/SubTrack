var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var SubSchema =  new Schema ({

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
    }
    
});

var UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    subscriptions: {
        type:[SubSchema]
    },
    FbId: {
        type: String,
        required: true
    }

});

var User = mongoose.model("User", UserSchema);

module.exports = User;