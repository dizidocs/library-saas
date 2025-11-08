import express from "express";
import Student from "../models/Student.js";
import Payment from "../models/Payment.js";
const router = express.Router();

// ✅ GET student by Firebase UID
router.get("/:uid", async (req, res) => {
  try {
    const { uid } = req.params;

    // Find student by Firebase UID
    const student = await Student.findOne({ firebaseUid: uid }).populate("libraryId");

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Fetch payment history for that student
    const payments = await Payment.find({ studentId: student._id }).sort({ date: -1 });

    // Combine data
    const data = {
      uid: student.firebaseUid,
      name: student.name,
      seatNo: student.seatNo,
      roomType: student.roomType,
      subscription: student.subscription,
      nextDueDate: student.nextDueDate,
      library: student.libraryId ? student.libraryId.name : null,
      payments,
    };

    res.status(200).json(data);
  } catch (err) {
    console.error("❌ Mongo fetch error:", err);
    res.status(500).json({ error: "Server error fetching student details" });
  }
});

export default router;
