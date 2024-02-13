const Journalist = require('../models/journalist');

// Méthode pour créer un nouveau journaliste
exports.createJournalist = async (req, res) => {
    try {
        const newJournalist = await Journalist.create(req.body);
        res.status(201).json(newJournalist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Méthode pour récupérer tous les journalistes
exports.getAllJournalists = async (req, res) => {
    try {
        const journalists = await Journalist.find();
        res.json(journalists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Méthode pour récupérer un journaliste par son ID
exports.getJournalistById = async (req, res) => {
    try {
        const { id } = req.params;
        const journalist = await Journalist.findById(id);
        if (!journalist) {
            return res.status(404).json({ message: "Journalist not found" });
        }
        res.json(journalist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Méthode pour mettre à jour un journaliste
exports.updateJournalist = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedJournalist = await Journalist.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedJournalist) {
            return res.status(404).json({ message: "Journalist not found" });
        }
        res.json(updatedJournalist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
