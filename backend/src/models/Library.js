import mongoose from "mongoose";

const librarySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    totalSeats: Number,
    occupiedSeats: { type: Number, default: 0 },
    acSeats: Number,
    nonAcSeats: Number,
    feesPerMonth: Number,
    revenue: { type: Number, default: 0 }, // 💰 Track income
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" } // ✅ New field
  },
  { timestamps: true }
);

export default mongoose.model("Library", librarySchema);
