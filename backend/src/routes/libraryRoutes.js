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

export default router;
