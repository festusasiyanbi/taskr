import dotenv from "dotenv";
dotenv.config();

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://festusasiyanbi:Festus%40taskr@taskr.rxfwujx.mongodb.net/?retryWrites=true&w=majority&appName=taskr",
}
export default config;