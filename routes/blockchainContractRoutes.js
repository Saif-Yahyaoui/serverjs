const express = require('express');
const { body, param } = require('express-validator');
const { createContract, getAllContracts, getContractById, updateContract, deleteContract } = require('../controllers/blockchainContractController');

const router = express.Router();

// Créer un nouveau contrat blockchain
router.post("/", [
  body("userId").isMongoId(),
  body("contractAddress").notEmpty(),
  body("transactionHash").notEmpty(),
  body("description").notEmpty(),
  body("contractType").isIn(['Smart Contract', 'Token Contract', 'Other']).optional(),
], createContract);

// Obtenir tous les contrats blockchain
router.get("/", getAllContracts);

// Obtenir un contrat par son ID
router.get("/:id", [
  param("id").isMongoId(),
], getContractById);

// Mettre à jour un contrat par son ID
router.put("/:id", [
  param("id").isMongoId(),
  body("userId").isMongoId(),
  body("contractAddress").notEmpty(),
  body("transactionHash").notEmpty(),
  body("description").notEmpty(),
  body("contractType").isIn(['Smart Contract', 'Token Contract', 'Other']).optional(),
], updateContract);

// Supprimer un contrat par son ID
router.delete("/:id", [
  param("id").isMongoId(),
], deleteContract);

module.exports = router;
