import createApp from "./app.js";
import { connectDB } from "./config/db.js";
import loadEnv from "../../loadEnv.js";

// Load environment before using it
loadEnv();

const PORT = Number(process.env.PORT) || 5000;
const MONGO_URI = process.env.MONGODB_URI; // normalized by loadEnv

async function start() {
  try {
    await connectDB(MONGO_URI);
    const app = createApp();
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
