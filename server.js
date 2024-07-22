import config from "./backend/dbconfig/config.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// The 2 lines get the path name to the root directory so as to avoid ES module error
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Below, we are telling the express app to treat the file as a static page
app.use(express.static(path.join(__dirname, "./frontend/dist/")));

// This will display the index.html file in our frontend to user whenever they visit the server
app.get(("*"), (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
});
