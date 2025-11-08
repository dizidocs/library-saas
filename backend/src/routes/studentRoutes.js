// ===============================
// 👨‍🎓 Student Routes
// ===============================
import express from "express";
const router = express.Router();

// In future, you'll import your MongoDB Student model
// import Student from "../models/Student.js";

// Temporary static data (to test frontend)
const mockStudentData = {
  Oaqt8gzylLSOgu9K52q7xNTLpKO2: {
    uid: "Oaqt8gzylLSOgu9K52q7xNTLpKO2",
    name: "Ravi Sharma",
    seatNo: 12,
    roomType: "AC",
    subscription: "Monthly",
    nextDueDate: "2025-12-01",
    payments: [
      { date: "2025-10-01", amount: 1000, mode: "Cash" },
      { date: "2025-11-01", amount: 1000, mode: "UPI" },
    ],
  },
  YuKFOHXzuyWvaS8gYwZDdjU9ZuC2: {
    uid: "YuKFOHXzuyWvaS8gYwZDdjU9ZuC2",
    name: "Amit Verma",
    seatNo: 5,
    roomType: "Non-AC",
    subscription: "Half-Month",
    nextDueDate: "2025-11-20",
    payments: [
      { date: "2025-10-15", amount: 600, mode: "Cash" },
      { date: "2025-11-05", amount: 600, mode: "UPI" },
    ],
  },
};

// ===============================
// GET /api/student/:uid
// ===============================
router.get("/:uid", async (req, res) => {
  try {
    const uid = req.params.uid;

    // Simulate DB lookup (replace with Mongo query later)
    const student = mockStudentData[uid];

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("❌ Error fetching student data:", error);
    res.status(500).json({ error: "Server error fetching student details" });
  }
});

export default router;
