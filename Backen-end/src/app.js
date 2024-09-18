import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";

const app = express();
dotenv.config(
    {
        path : "./.env"
    }
);

app.use(cors(
    {
        origin : process.env.CORS_ORIGIN,
    }
));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieparser());

import admisionRoute from "./routes/addmision.route.js";
app.use("/api/v1", admisionRoute);

import feedBackRoute from "./routes/feedback.route.js";
app.use("/api/v1",feedBackRoute)

export { app };