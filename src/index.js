import app from "./app.js";
import {
    connDB
} from "./db.js";

connDB()

const PORT = 3000
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});