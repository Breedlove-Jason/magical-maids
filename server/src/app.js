import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import servicesRoutes from "./routes/services.routes.js";
import bookingsRoutes from "./routes/bookings.routes.js";
import testimonialsRoutes from "./routes/testimonials.routes.js";
import teamRoutes from "./routes/team.routes.js";
import { notFound, errorHandler } from "./middleware/error.js";

function buildCorsOptions() {
  const origins = (process.env.CORS_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
  if (origins.length === 0) {
    // In dev, allow all unless specified
    return { origin: true, credentials: true };
  }
  return {
    credentials: true,
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // non-browser or same-origin
      const allowed = origins.includes(origin);
      callback(allowed ? null : new Error("Not allowed by CORS"), allowed);
    }
  };
}

export default function createApp() {
  const app = express();

  // Security & performance middleware
  app.use(helmet());
  app.use(compression());

  // Logging (skip noisy test env)
  if (process.env.NODE_ENV !== "test") {
    app.use(morgan("tiny"));
  }

  // Rate limiting (basic)
  const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
  app.use(limiter);

  // CORS and JSON body parsing
  app.use(cors(buildCorsOptions()));
  app.use(express.json({ limit: "200kb" }));

  app.get("/health", (_, res) => res.json({ ok: true }));

  // Routes
  app.use("/api/services", servicesRoutes);
  app.use("/api/bookings", bookingsRoutes);
  app.use("/api/testimonials", testimonialsRoutes);
  app.use("/api/team", teamRoutes);

  // 404 and error handling
  app.use(notFound);
  app.use(errorHandler);

  return app;
}
