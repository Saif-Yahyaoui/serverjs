const express = require('express');
const router = express.Router();
const { signin, signUp, forgotPassword, resetPassword } = require('../controllers/authController');

// Routes pour l'authentification
router.post("/signin", signin);
router.post("/signup", signUp);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
