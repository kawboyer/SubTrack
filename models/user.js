var mongoose = require("mongoose");

var Schema = mongoose.Schema;


// var SubSchema =  new Schema ({

//     name:{
//         type: String,
//         required: true
//     },
//     cost:{
//         type: Number,
//         required: true,
//         default: 0 
//     },
//     duration:{
//         type: String,
//         default: "monthly"
//     }
    
// });

var UserSchema = new Schema({

    FbId: {
        type: String,
        required: true,
        unique: true
    },
    subscriptions: [
        {
          type: Schema.Types.ObjectId,
          ref: "Subscription"
        }
      ]

});

var User = mongoose.model("User", UserSchema);

module.exports = User;