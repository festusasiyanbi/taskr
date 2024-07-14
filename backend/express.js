import express from "express";
import bodyParser from "body-parser";
// const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});
export default app;