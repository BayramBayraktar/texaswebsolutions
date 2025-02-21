import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User