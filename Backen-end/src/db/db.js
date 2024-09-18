import mongoose from "mongoose";
import { MONGDB_URL } from "../constant.js";

const connnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${MONGDB_URL}`);
        console.log(`MongoDB connected Succesfully || host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connection failed due to ${error}`);
    }
}

export default connnectDB
