import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    quote: { type: String, required: true },
    location: String,
    serviceName: String,
    imageUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", TestimonialSchema);
