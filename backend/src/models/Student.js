import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: String,
    seatNo: Number,
    roomType: {
      type: String,
      enum: ["AC", "Non-AC"],
    },
    subscription: {
      type: String,
      enum: ["Monthly", "Half-Month"],
      default: "Monthly",
    },
    nextDueDate: String,
    libraryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Library",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
