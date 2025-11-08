// ===============================
// 💰 Payment Routes (UPI QR)
// ===============================
import express from "express";
const router = express.Router();

// In future, you can generate QR dynamically with custom amounts
// For now, we use a public QR API
router.get("/upi", async (req, res) => {
  try {
    const upiId = "yourupiid@okaxis";
    const amount = 1000; // static amount for now (can change per student)

    // Generate QR Code dynamically
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=${upiId}&am=${amount}&cu=INR`;

    res.status(200).json({
      upiId,
      amount,
      qrCode: qrUrl,
      message: "UPI QR generated successfully",
    });
  } catch (error) {
    console.error("❌ Error generating UPI QR:", error);
    res.status(500).json({ error: "Failed to generate QR code" });
  }
});

export default router;
