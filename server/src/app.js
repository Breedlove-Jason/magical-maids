import express from "express";
import cors from "cors";

import servicesRoutes from "./routes/services.routes.js";
import bookingsRoutes from "./routes/bookings.routes.js";
import testimonialsRoutes from "./routes/testimonials.routes.js";
import teamRoutes from "./routes/team.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.json({ ok: true }));

app.use("/api/services", servicesRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/testimonials", testimonialsRoutes);
app.use("/api/team", teamRoutes);

export default app;
