import mongoose, { Schema } from "mongoose";

const feedBackSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    number : {
        type : String,
        required : true
    },
    feedback : {
        type : String,
        required : true
    }
},{timestamps : true})

export const FeedBack = mongoose.model("FeedBack",feedBackSchema)