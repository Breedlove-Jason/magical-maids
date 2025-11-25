import { Router } from "express";
import { createBooking, getBookings } from "../controllers/bookings.controller.js";
import asyncHandler from "../utils/asyncHandler.js";
const router = Router();
router.post("/", asyncHandler(createBooking));
router.get("/", asyncHandler(getBookings));
export default router;
