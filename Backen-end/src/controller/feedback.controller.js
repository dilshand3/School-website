import { FeedBack } from "../model/feedback.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";

const feedback = asyncHandler(async (req, res) => {
    const { name, email, number, feedback } = req.body
    console.log(req.body)

    if (!name || !email || !number || !feedback) {
        throw new ApiError(401, "All field required")
    }

    const createdFeedBack = await FeedBack.create({
        name,
        email,
        number,
        feedback
    })

    res.status(200).json({ message: "feedback created succesfully", data: createdFeedBack })

})

const sendFeedBack = asyncHandler(async (req,res) => {
    const allFeedBack = await FeedBack.find();
    res.send(allFeedBack)
})

const deleteFeedback = asyncHandler (async (req,res) => {
    const { id } = req.body;
    console.log(req.body)

    if (!id) {
        throw new ApiError(400, "Feedback ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid Feedback ID format");
    }

    const deletedFeedBack = await FeedBack.findByIdAndDelete(id);

    if (!deletedFeedBack) {
        throw new ApiError(404, "Admission not found");
    }

    res.status(200).json({ message: "Admission successfully deleted" });
})

export { feedback,sendFeedBack,deleteFeedback }