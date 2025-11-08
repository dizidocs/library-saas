import express from "express";
const router = express.Router();

router.get("/:uid", (req, res) => {
  // You’ll later replace this with real MongoDB queries by uid
  const studentData = {
    uid: req.params.uid,
    name: "Ravi Sharma",
    seatNo: 12,
    roomType: "AC",
    subscription: "Monthly",
    nextDueDate: "2025-12-01",
    payments: [
      { date: "2025-11-01", amount: 1000, mode: "UPI" },
      { date: "2025-10-01", amount: 1000, mode: "Cash" }
    ]
  };
  res.json(studentData);
});

export default router;
