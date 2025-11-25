// loadEnv.js (CommonJS for cross-package compatibility)
const fs = require("fs");
const path = require("path");

// Always load env from server/.env relative to repo root (this file lives at repo root)
const ENV_PATH = path.resolve(__dirname, "server", ".env");

// Cache for loaded environment variables
let cachedEnv = null;

function parseEnv(contents) {
  const env = {};
  contents
    .split(/\r?\n/)
    .filter((line) => line && !/^\s*#/.test(line))
    .forEach((line) => {
      // support KEY=VALUE (value may contain =, so split only on first =)
      const idx = line.indexOf("=");
      if (idx === -1) return;
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      // strip surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      env[key] = value;
    });
  return env;
}

function loadEnv() {
  if (cachedEnv) return cachedEnv;

  try {
    const raw = fs.readFileSync(ENV_PATH, "utf8");
    const parsed = parseEnv(raw);
    // assign keys to process.env if not already set
    for (const [k, v] of Object.entries(parsed)) {
      if (process.env[k] === undefined) {
        process.env[k] = v;
      }
    }
  } catch (err) {
    console.error("Error loading environment variables:", err);
    process.exit(1);
  }

  // Provide sane defaults/aliases
  if (!process.env.PORT) process.env.PORT = "5000";

  // Support both MONGODB_URI and MONGO_URI
  if (!process.env.MONGODB_URI && process.env.MONGO_URI) {
    process.env.MONGODB_URI = process.env.MONGO_URI;
  }
  if (!process.env.MONGO_URI && process.env.MONGODB_URI) {
    process.env.MONGO_URI = process.env.MONGODB_URI;
  }

  // Validate required variables for current backend
  const requiredEnvVars = ["MONGODB_URI"]; // primary requirement for DB connection
  const missing = requiredEnvVars.filter((k) => !process.env[k]);
  if (missing.length > 0) {
    console.error(
      `Missing required environment variables: ${missing.join(", ")}.\n` +
        `Expected to find server/.env at: ${ENV_PATH}`,
    );
    process.exit(1);
  }

  console.log("🚀 Environment variables loaded from server/.env");
  cachedEnv = process.env;
  return cachedEnv;
}

module.exports = loadEnv;
