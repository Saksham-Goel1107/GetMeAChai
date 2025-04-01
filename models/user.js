import mongoose from "mongoose";
const {Schema,model} = mongoose;
const userSchema = new Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    profilepic:{
        type:String,
    },
    coverpic:{
        type:String,
    },
    
    createdAt:{
        type:Date, 
        default:Date.now,
    },
    updatedAt:{
        type:Date, 
        default:Date.now,
    },
})

const userModel = mongoose.models.user || model("user", userSchema); // Prevent OverwriteModelError
export default userModel;