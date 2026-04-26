import express from "express";
import multer from "multer";

import { uploadContent, approveContent, rejectContent } from "../controllers/contentController.js";

import auth from "../middlewares/authMiddleware.js";

import role from "../middlewares/roleMiddleware.js";

const router=express.Router();

const upload=multer({ dest:"uploads/"});

router.post("/upload",auth,role("teacher"),upload.single("file"), uploadContent);

router.put("/approve/:id",auth,role("principal"),approveContent);

router.put("/reject/:id",auth,role("principle"),rejectContent);

export default router;