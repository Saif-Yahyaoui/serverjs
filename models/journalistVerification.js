import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const journalistVerificationSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        documents: {
            type: Array,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        adminId: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export default model('JournalistVerification', journalistVerificationSchema);