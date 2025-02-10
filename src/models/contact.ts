import mongoose from "mongoose";

const contactSchma = new mongoose.Schema({
    Name: {
        type: String,
        unique: true,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchma);

export default Contact