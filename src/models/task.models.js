import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    titulo: {
        type: 'string',
        required: true,
        unique: true,
        trim: true,
    },
    descripcion: {
        type: 'string',
        required: true,
        trim: true,
        unique: true,
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
    user: {
        typeof: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true,
})

export default mongoose.model('Task', taskSchema);