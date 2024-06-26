import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: 'string',
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model("User", userSchema);