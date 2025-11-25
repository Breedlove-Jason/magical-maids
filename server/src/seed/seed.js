import { connectDB } from "../config/db.js";
import loadEnv from "../../../loadEnv.js";
import Service from "../models/Service.js";
import Testimonial from "../models/Testimonial.js";
import TeamMember from "../models/TeamMember.js";

import { services, testimonials, team } from "./data.js";

// Ensure env is loaded before DB connect
loadEnv();

await connectDB(process.env.MONGODB_URI);

await Service.deleteMany({});
await Testimonial.deleteMany({});
await TeamMember.deleteMany({});

await Service.insertMany(services);
await Testimonial.insertMany(testimonials);
await TeamMember.insertMany(team);

console.log("✅ Seed complete");
process.exit(0);
