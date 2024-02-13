const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const journalistSchema = new Schema({
    ...User.schema.obj,
    bio: String,
    badge: String,
    articles: [{ type: Schema.Types.ObjectId, ref: 'Post' }] 
});

module.exports = mongoose.model('Journalist', journalistSchema);
