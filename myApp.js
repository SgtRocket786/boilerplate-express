const express = require("express");
const app = express();
require("dotenv").config();

console.log("Hello World");

// Serve static assets
app.use("/public", express.static(__dirname + "/public"));

// Root route serves the HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// JSON API route with MESSAGESTYLE env toggle
app.get("/json", (req, res) => {
  const message = process.env.MESSAGESTYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({ message });
});

module.exports = app;
