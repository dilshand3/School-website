import { Router } from "express";
import { newAddmision, deleteAddmisionByPost, shareAllAddmission, getAdmissionById } from "../controller/addmision.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

// Ensure the route matches the one being called from the frontend
router.route("/admission/:id").get(getAdmissionById); // Add this route

router.route("/admission").post(upload.fields([
    {
        name: "studentPhoto",
        maxCount: 1
    }
]), newAddmision);

// New route for deleting admission using POST request
router.route("/admission/delete").post(deleteAddmisionByPost);
router.route("/addmision/alladmission").get(shareAllAddmission)

export default router;