let express = require("express");
let app = express();

console.log("Hello World");

app.get("/", (req, res) => {
  res.type('text').send('Hello Express');
});

module.exports = app;
