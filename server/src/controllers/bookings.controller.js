import Booking from "../models/Booking.js";
import Service from "../models/Service.js";
import { z } from "zod";

const bookingSchema = z.object({
  customerName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().min(5),
  serviceId: z.string(),
  bedrooms: z.coerce.number().min(0).optional(),
  bathrooms: z.coerce.number().min(0).optional(),
  preferredDate: z.coerce.date(),
  preferredTime: z.string().min(3),
  notes: z.string().optional()
});

export async function createBooking(req, res) {
  const parsed = bookingSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid booking", errors: parsed.error.flatten() });
  }
  
  const data = parsed.data;
  const service = await Service.findById(data.serviceId);
  if (!service) return res.status(404).json({ message: "Service not found" });
  
  const estimatedPrice =
    service.basePrice +
    (data.bedrooms || 0) * 15 +
    (data.bathrooms || 0) * 20;
  
  const booking = await Booking.create({ ...data, estimatedPrice });
  res.status(201).json(booking);
}

export async function getBookings(req, res) {
  const bookings = await Booking.find().populate("serviceId").sort({ createdAt: -1 });
  res.json(bookings);
}
