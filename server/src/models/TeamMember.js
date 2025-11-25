import mongoose from "mongoose";

const TeamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: { type: String, required: true },
    yearsExperience: Number,
    specialties: [{ type: String }],
    imageUrl: String
  },
  { timestamps: true }
);

export default mongoose.model("TeamMember", TeamMemberSchema);
