import express from "express";
import { createOwner } from "../controllers/ownerController.js";

const router = express.Router();

// POST /api/owners
router.post("/", createOwner);

export default router;
