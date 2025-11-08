import mongoose from "mongoose";

const librarySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    totalSeats: { type: Number, default: 0 },
    occupiedSeats: { type: Number, default: 0 },
    acSeats: { type: Number, default: 0 },
    nonAcSeats: { type: Number, default: 0 },
    address: String,
    feesPerMonth: { type: Number, default: 1000 },
  },
  { timestamps: true }
);

export default mongoose.model("Library", librarySchema);
