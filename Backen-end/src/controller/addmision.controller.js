import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnClodinary } from "../utils/cloudinary.js";
import { Addmision } from "../model/addmision.model.js";
import mongoose from "mongoose";

const newAddmision = asyncHandler(async (req, res) => {
    const { firstname, lastname, fathername, mothername, admisionClass, LastClass, LastClassMarks, adharCard, location, city, district, cast, number, email, fathernumber,dob } = req.body
    console.log(firstname, lastname, fathername, mothername, admisionClass, LastClass, LastClassMarks, adharCard, location, city, district, cast, number, email, fathernumber,dob)

    if (!firstname || !lastname || !fathername || !mothername || !admisionClass ||
        !LastClass || !LastClassMarks || !adharCard || !location || !city ||
        !district || !cast || !number || !email || !fathernumber) {
        throw new ApiError(401, "All fields are required");
    }

    const studentPhotoLocal = req.files?.studentPhoto?.[0]?.path;

    console.log(req.body)
    if (!studentPhotoLocal) {
        throw new ApiError(401, "Student photo is required");
    }

    const studentPhoto = await uploadOnClodinary(studentPhotoLocal);

    if (!studentPhoto) {
        throw new ApiError(401,"student photo didn't upload on cloudniary")
    }

    const createAdmision = await Addmision.create({
        firstname,
        lastname,
        fathername,
        mothername,
        admisionClass,
        LastClass,
        LastClassMarks,
        adharCard,
        location,
        city,
        district,
        cast,
        number,
        email,
        fathernumber,
        studentPhoto: studentPhoto.url,
        dob
    });

    res.status(200).json({ message: "Admission successfully created", data: createAdmision });
});


const deleteAddmisionByPost = asyncHandler(async (req, res) => {
    const { id } = req.body;
    console.log(req.body)

    if (!id) {
        throw new ApiError(400, "Admission ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid Admission ID format");
    }

    const admission = await Addmision.findByIdAndDelete(id);

    if (!admission) {
        throw new ApiError(404, "Admission not found");
    }

    res.status(200).json({ message: "Admission successfully deleted" });
});

const shareAllAddmission = asyncHandler(async(req,res) => {
    const shareAllAddmission = await Addmision.find()
    res.send(shareAllAddmission)
})

const getAdmissionById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid Admission ID format");
    }

    const admission = await Addmision.findById(id);

    if (!admission) {
        throw new ApiError(404, "Admission not found");
    }

    res.status(200).json(admission);
});

export { newAddmision, deleteAddmisionByPost, shareAllAddmission, getAdmissionById };