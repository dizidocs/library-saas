import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import ownerRoutes from "./routes/ownerRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

// Load environment variables
dotenv.config();

const app = express(); // ✅ Define app before using it


app.use("/api/owner", ownerRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/payment", paymentRoutes);

// Middleware
app.use(express.json());

// ✅ Enable CORS for frontend + localhost
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://librarysaas-46bde.web.app"
    ],
    credentials: true,
  })
);

// Import routes
import userRoutes from "./routes/userRoutes.js";

// ✅ Mount routes AFTER app is defined
app.use("/api/users", userRoutes);

// Default route (optional)
app.get("/", (req, res) => {
  res.send("Library SaaS Backend Running 🚀");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
