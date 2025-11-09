import Owner from "../models/ownerModel.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export const createOwner = async (req, res) => {
  try {
    const { name, email, phone, libraryName, subscription } = req.body;

    // check existing
    const existing = await Owner.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Owner already exists" });
    }

    // generate password
    const tempPassword = crypto.randomBytes(4).toString("hex");
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    // create new owner
    const newOwner = await Owner.create({
      name,
      email,
      phone,
      libraryName,
      subscription,
      password: hashedPassword,
      status: "pending",
      createdAt: new Date(),
    });

    res.status(201).json({
      message: "Owner created successfully",
      owner: {
        id: newOwner._id,
        email: newOwner.email,
        tempPassword,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
