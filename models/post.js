import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        category: { //contentType
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            required: true
        },
        credibilityScore: { //pourcentage
            type: Number,
            required: true
        },
        votes: {
            type: Schema.Types.ObjectId, 
            ref: 'Vote',
            required: true
        },
        comments: {
            type: Schema.Types.ObjectId, 
            ref: 'Comment',
            required: true
        },
        likes: {
            type: Number,
            required: true
        },
        dislikes: {
            type: Number,
            required: true
        },
        reports: { //Nombre de signalements
            type: Number,
            required: true
        } //attachments si on desire ajouter des attachements (image..) au message
    },
    {
        timestamps: true
    }
);

export default model('Post', postSchema);
