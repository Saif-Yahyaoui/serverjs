import express from "express";
const router = express.Router();
import { deleteAccount, deactivateAccount } from '../controllers/accountController.js';

// Routes pour supprimer et désactiver le compte utilisateur
router.delete("/delete-account", deleteAccount);
router.put("/deactivate-account", deactivateAccount);

export default router;
