import dotenv from "dotenv";
dotenv.config();

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://festusasiyanbi:Festus%40taskr@taskr.rxfwujx.mongodb.net/?retryWrites=true&w=majority&appName=taskr",
}
export default config;