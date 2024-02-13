const express = require('express');
const { body, param } = require('express-validator');
const { createComment, getAllComments, getCommentById, deleteComment } = require('../controllers/commentController');

const router = express.Router();

// Créer un nouveau commentaire
router.post("/", [
  body("userId").isMongoId(),
  body("content").notEmpty(),
], createComment);

// Obtenir tous les commentaires
router.get("/", getAllComments);

// Obtenir un commentaire par ID
router.get("/:id", [
  param("id").isMongoId(),
], getCommentById);

// Supprimer un commentaire par ID
router.delete("/:id", [
  param("id").isMongoId(),
], deleteComment);

module.exports = router;
