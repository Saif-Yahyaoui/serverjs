import express from "express";
import { body, param } from "express-validator";
import { createReport, getAllReports, getReportById, updateReport } from "../controllers/reportController.js";

const router = express.Router();

router.post("/", [
  body("userId").isMongoId(),
  body("postId").isMongoId(),
  body("reason").notEmpty(),
  body("status").isIn(["pending", "approved", "rejected"]),
], createReport);

router.get("/", getAllReports);

router.get("/:id", [
  param("id").isMongoId(),
], getReportById);

router.put("/:id", [
  param("id").isMongoId(),
  body("userId").isMongoId(),
  body("postId").isMongoId(),
  body("reason").notEmpty(),
  body("status").isIn(["pending", "approved", "rejected"]),
], updateReport);

export default router;
