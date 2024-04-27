import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: true
    }
}, {
    timestamps: true,
})

export default mongoose.model('Task', taskSchema);