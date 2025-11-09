import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  libraryName: String,
  subscription: { type: String, enum: ["monthly", "yearly"] },
  password: String,
  status: { type: String, default: "pending" },
  createdAt: Date,
});

const Owner = mongoose.model("Owner", ownerSchema);
export default Owner;
