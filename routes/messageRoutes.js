const express = require('express');
const { body, param } = require('express-validator');
const { createMessage, getAllMessages, getMessageById, deleteMessage } = require('../controllers/messageController');

const router = express.Router();

// Créer un nouveau message
router.post("/", [
  body("userId").isMongoId(),
  body("content").notEmpty(),
], createMessage);

// Obtenir tous les messages
router.get("/", getAllMessages);

// Obtenir un message par ID
router.get("/:id", [
  param("id").isMongoId(),
], getMessageById);

// Supprimer un message
router.delete("/:id", [
  param("id").isMongoId(),
], deleteMessage);

module.exports = router;
