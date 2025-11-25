import { Router } from "express";
import { getServices } from "../controllers/services.controller.js";
import asyncHandler from "../utils/asyncHandler.js";
const router = Router();
router.get("/", asyncHandler(getServices));
export default router;
