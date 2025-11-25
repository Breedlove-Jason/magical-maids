import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    basePrice: { type: Number, required: true },
    durationMins: { type: Number, default: 120 },
    highlights: [{ type: String }],
    imageUrl: String,
    popular: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Service", ServiceSchema);
