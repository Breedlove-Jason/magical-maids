import { Router } from "express";
import { getTestimonials, createTestimonial } from "../controllers/testimonials.controller.js";
const router = Router();
router.get("/", getTestimonials);
router.post("/", createTestimonial);
export default router;
