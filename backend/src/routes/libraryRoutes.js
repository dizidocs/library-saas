import express from "express";
import Library from "../models/Library.js";

const router = express.Router();

// ✅ Create a new library
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

    const saved = await newLibrary.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("❌ Error creating library:", error);
    res.status(500).json({ error: "Failed to create library" });
  }
});

// ✅ Get all libraries
router.get("/", async (req, res) => {
  try {
    const libraries = await Library.find();
    res.status(200).json(libraries);
  } catch (error) {
    console.error("❌ Error fetching libraries:", error);
    res.status(500).json({ error: "Failed to fetch libraries" });
  }
});

// ✅ Admin: Get pending libraries
router.get("/pending", async (req, res) => {
  try {
    const pendingLibs = await Library.find({ status: "pending" });
    res.status(200).json(pendingLibs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pending libraries" });
  }
});

// ✅ Admin: Approve or Reject Library
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body; // "approved" or "rejected"
    const updated = await Library.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update status" });
  }
});


export default router;
