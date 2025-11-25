import { Router } from "express";
import { createBooking, getBookings } from "../controllers/bookings.controller.js";
const router = Router();
router.post("/", createBooking);
router.get("/", getBookings);
export default router;
