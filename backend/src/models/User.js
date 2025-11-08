import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true, unique: true },
  name: String,
  email: String,
  role: { type: String, enum: ["admin", "owner", "student"], default: "student" },
  libraryId: { type: mongoose.Schema.Types.ObjectId, ref: "Library" },
});

const User = mongoose.model("User", userSchema);
export default User;
