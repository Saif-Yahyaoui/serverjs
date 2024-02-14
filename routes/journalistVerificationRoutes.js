import express from "express";
import { body, param } from "express-validator";
import { createJournalistVerification, getAllJournalistVerifications, getJournalistVerificationById, updateJournalistVerification } from '../controllers/journalistVerificationController.js';

const router = express.Router();

// Créer une nouvelle vérification de journaliste
router.post("/", [
  body("userId").isMongoId(),
  body("documents").isArray(),
  body("status").notEmpty(),
  body("adminId").notEmpty(),
], createJournalistVerification);

// Obtenir toutes les vérifications de journalistes
router.get("/", getAllJournalistVerifications);

// Obtenir une vérification de journaliste par ID
router.get("/:id", [
  param("id").isMongoId(),
], getJournalistVerificationById);

// Mettre à jour une vérification de journaliste par ID
router.put("/:id", [
  param("id").isMongoId(),
  body("userId").isMongoId(),
  body("documents").isArray(),
  body("status").notEmpty(),
  body("adminId").notEmpty(),
], updateJournalistVerification);

export default router;
