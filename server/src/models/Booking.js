import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    address: { type: String, required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    bedrooms: Number,
    bathrooms: Number,
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true },
    notes: String,
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending"
    },
    estimatedPrice: Number
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
