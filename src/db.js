import mongoose from "mongoose";

export const connDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://cqasss:UBaI0AoUDfjVqgN7@nodemongoapireact.1aa3v8y.mongodb.net/?retryWrites=true&w=majority&appName=nodemongoapireact')
        console.log('Database connection established');
    } catch (e) {
        console.error(`Error connecting: ${e}`)
    }
}