const express = require('express');
const { body, param } = require('express-validator');
const { createJournalist, getAllJournalists, getJournalistById, updateJournalist } = require('../controllers/journalistController');

const router = express.Router();

// Créer un nouveau journaliste
router.post("/", createJournalist);

// Obtenir tous les journalistes
router.get("/", getAllJournalists);

// Obtenir un journaliste par ID
router.get("/:id", [
  param("id").isMongoId(),
], getJournalistById);

// Mettre à jour un journaliste
router.put("/:id", [
  param("id").isMongoId(),
], updateJournalist);

module.exports = router;
