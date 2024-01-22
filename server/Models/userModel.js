const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({


    name: { type: String, required: true, minlength: 4, maxlength: 50 },
    email: { type: String, required: true, minlength: 4, maxlength: 50, unique: true },
    password: { type: String, required: true, minlength: 4, maxlength: 50 },

},
{ timestamps: true }
)

const userModel=mongoose.model("User",userSchema)
module.exports=userModel