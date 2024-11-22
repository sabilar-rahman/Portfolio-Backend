import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
import { Server } from "http";

let server: Server;

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
  if (server) {
    server.close(() => {
      console.error("Server closed due to unhandled rejection");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log("Database connected successfully");
    server = app.listen(config.port, () => {
      console.log(`Portfolio Backend is running on port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
}

main();

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close(() => {
      console.log("Server closed due to SIGTERM");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

process.on("SIGINT", () => {
  console.log("SIGINT received");
  if (server) {
    server.close(() => {
      console.log("Server closed due to SIGINT");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});