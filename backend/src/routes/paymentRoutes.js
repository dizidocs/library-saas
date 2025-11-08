import express from "express";
const router = express.Router();

router.get("/upi", (req, res) => {
  const qrCode = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=yourupiid@okaxis&am=1000&cu=INR";
  res.json({ qrCode, upiId: "yourupiid@okaxis", amount: 1000 });
});

export default router;
