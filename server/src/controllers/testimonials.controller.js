import Testimonial from "../models/Testimonial.js";
import { z } from "zod";

const testimonialSchema = z.object({
  customerName: z.string().min(2).max(60),
  rating: z.number().int().min(1).max(5).default(5),
  quote: z.string().min(10).max(600),
  location: z.string().min(2).max(80).default("Auburn, CA"),
  serviceName: z.string().min(2).max(80).optional(),
  imageUrl: z.string().url().optional()
});

function sanitize(str = "") {
  return str.replace(/[<>]/g, "");
}

export async function getTestimonials(req, res) {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  res.json(testimonials);
}

export async function createTestimonial(req, res) {
  const parsed = testimonialSchema.safeParse(req.body);
  
  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid review data",
      errors: parsed.error.flatten()
    });
  }
  
  const clean = parsed.data;
  
  const doc = await Testimonial.create({
    ...clean,
    customerName: sanitize(clean.customerName),
    quote: sanitize(clean.quote),
    location: sanitize(clean.location),
    serviceName: clean.serviceName ? sanitize(clean.serviceName) : undefined
  });
  
  res.status(201).json(doc);
}
