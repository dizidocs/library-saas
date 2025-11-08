import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    amount: Number,
    mode: { type: String, enum: ["UPI", "Cash"], default: "UPI" },
    date: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
