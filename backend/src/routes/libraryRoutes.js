// ===============================
// 🏛️ Library CRUD Routes
// ===============================
import express from "express";
import Library from "../models/Library.js";
const router = express.Router();

// ✅ Create new library
router.post("/", async (req, res) => {
  try {
    const { name, address, feesPerMonth, totalSeats, acSeats, nonAcSeats } = req.body;

    const newLibrary = new Library({
      name,
      address,
      feesPerMonth,
      totalSeats,
      acSeats,
      nonAcSeats,
      occupiedSeats: 0,
    });

    const savedLibrary = await newLibrary.save();
    res.status(201).json(savedLibrary);
  } catch (err) {
    console.error("❌ Error creating library:", err);
    res.status(500).json({ error: "Failed to create library" });
  }
});

// ✅ Get all libraries
router.get("/", async (req, res) => {
  try {
    const libraries = await Library.find();
    res.status(200).json(libraries);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch libraries" });
  }
});

// ✅ Update library (seat or fee)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Library.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update library" });
  }
});

// ✅ Delete library
router.delete("/:id", async (req, res) => {
  try {
    await Library.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Library deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete library" });
  }
});

export default router;
