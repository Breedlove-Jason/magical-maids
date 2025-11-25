import { Router } from "express";
import { getTestimonials, createTestimonial } from "../controllers/testimonials.controller.js";
import asyncHandler from "../utils/asyncHandler.js";
const router = Router();
router.get("/", asyncHandler(getTestimonials));
router.post("/", asyncHandler(createTestimonial));
export default router;
