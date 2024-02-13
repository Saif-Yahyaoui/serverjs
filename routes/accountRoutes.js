const express = require('express');
const router = express.Router();
const { deleteAccount, deactivateAccount } = require('../controllers/accountController');

// Routes pour supprimer et désactiver le compte utilisateur
router.delete("/delete-account", deleteAccount);
router.put("/deactivate-account", deactivateAccount);

module.exports = router;
