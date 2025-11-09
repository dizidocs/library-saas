// ===============================
// ✅ Library SaaS Backend Server
// ===============================

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import all routes
import userRoutes from "./routes/userRoutes.js";
import ownerRoutes from "./routes/ownerRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import libraryRoutes from "./routes/libraryRoutes.js";


// ===============================
// 🔧 Configurations
// ===============================
dotenv.config();
const app = express();
app.use(express.json());

// ===============================
// 🌐 Enable CORS for Frontend Access
// ===============================
app.use(
  cors({
    origin: [
      "http://localhost:3000",               // local frontend
      "https://librarysaas-46bde.web.app",   // live Firebase hosting
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Fallback header in case Render strips CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// ===============================
// 🚏 API Routes
// ===============================
app.get("/", (req, res) => {
  res.send("📚 Library SaaS Backend is Running Successfully 🚀");
});

app.use("/api/users", userRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/library", libraryRoutes);

// ===============================
// ⚙️ MongoDB Connection
// ===============================
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ===============================
// 🚀 Start the Server
// ===============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
