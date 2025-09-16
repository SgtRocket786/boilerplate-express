let express = require("express");
let app = express();

console.log("Hello World");

// Serve static assets
app.use("/public", express.static(__dirname + "/public"));

// Root route serves the HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
