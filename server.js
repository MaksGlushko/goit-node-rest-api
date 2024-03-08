import mongoose from "mongoose";
import 'dotenv/config';
import { app } from "./app.js";

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.connect("mongodb+srv://Maks:HuWjIMBKGVrcaF5Y@cluster0.peqplzf.mongodb.net/db-contacts")

.then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
})
.catch((err) => {
    console.log(err.message);
    process.exit(1);

})