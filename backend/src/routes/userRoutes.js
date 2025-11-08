import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.get("/role/:uid", async (req, res) => {
  try {
    const user = await User.findOne({ firebaseUid: req.params.uid });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
