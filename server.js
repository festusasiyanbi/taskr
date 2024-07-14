import app from "./backend/express.js";
import config from "./dbconfig/config.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://festusasiyanbi:Festus%40taskr@taskr.rxfwujx.mongodb.net/?retryWrites=true&w=majority&appName=taskr")
.then(() => {
    console.log("MongoDB connected successfully");

    app.listen(config.port, () => {
        console.log(`App is connected to the database & running on port ${config.port}!`);
    });
})
.catch(err => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
});

mongoose.connection.on('error', err => {
    console.error('MongoDB error:', err.message);
    process.exit(1);
});
