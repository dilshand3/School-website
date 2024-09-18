import mongoose, { Schema } from "mongoose";

const addmisionSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        fathername: {
            type: String,
            required: true
        },
        mothername: {
            type: String,
            required: true,
        },
        admisionClass: {
            type: String,
            required: true
        },
        LastClass: {
            type: String,
            required: true
        },
        LastClassMarks: {
            type: String,
            required: true
        },
        studentPhoto: {
            type: String, //cloudinary URL
            required: true
        },
        adharCard: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        cast: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        fathernumber: {
            type: String,
            required: true
        },
        dob: {
            required: true,
            type: String
        }
    }, {
    timestamps: true
});

export const Addmision = mongoose.model("Addmision", addmisionSchema)