import express from "express";
const router = express.Router();

// Example data for now — you’ll later replace this with MongoDB queries
router.get("/seats", (req, res) => {
  const seatsData = {
    totalSeats: 60,
    occupied: 45,
    available: 15,
  };
  res.json(seatsData);
});

router.get("/fees", (req, res) => {
  const feeData = {
    totalCollected: 52000,
    pending: 12000,
    mode: {
      upi: 40,
      cash: 20
    }
  };
  res.json(feeData);
});

export default router;
