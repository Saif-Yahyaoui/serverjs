const express = require('express');
const { body, param } = require('express-validator');
const { createJournalistVerification, getAllJournalistVerifications, getJournalistVerificationById, updateJournalistVerification } = require('../controllers/journalistVerificationController');

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

module.exports = router;
