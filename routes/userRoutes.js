const express = require('express');
const router = express.Router();
const { editProfile, getAllUsers, getUserDetails, changePassword, followJournalist, unfollowJournalist } = require('../controllers/userController');

// Routes pour l'édition du profil
router.put("/edit-profile", editProfile);

// Routes pour obtenir tous les utilisateurs et les détails de l'utilisateur actuel
router.get("/", getAllUsers);
router.get("/details", getUserDetails);

// Routes pour changer le mot de passe, suivre/désabonner des journalistes
router.put("/change-password", changePassword);
router.post("/follow-journalist/:journalistId", followJournalist);
router.delete("/unfollow-journalist/:journalistId", unfollowJournalist);

module.exports = router;
