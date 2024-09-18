import {feedback, sendFeedBack,deleteFeedback } from "../controller/feedback.controller.js";
import Router from "express";
const router = Router();

router.route("/newFeedback").post(feedback);
router.route("/allfeedback").get(sendFeedBack);
router.route("/deletefeedback").post(deleteFeedback);


export default router
