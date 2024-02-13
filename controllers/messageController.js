const Message = require('../models/message');

// Méthode pour créer un nouveau message
exports.createMessage = async (req, res) => {
    try {
        const { userId, content } = req.body;
        const newMessage = await Message.create({ userId, content });
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Méthode pour récupérer tous les messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Méthode pour récupérer un message par son ID
exports.getMessageById = async (req, res) => {
    try {
        const { id } = req.params;
        const message = await Message.findById(id);
        if (!message) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/** // Méthode pour mettre à jour un message
exports.updateMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, content } = req.body;
        const updatedMessage = await Message.findByIdAndUpdate(id, { userId, content }, { new: true });
        if (!updatedMessage) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.json(updatedMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
*/

// Méthode pour supprimer un message
exports.deleteMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMessage = await Message.findByIdAndDelete(id);
        if (!deletedMessage) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.json({ message: "Message deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
