let express = require("express");
let app = express();
let absolutePath = _dirname + "/views/index.html";




console.log("Hello World");

app.get("/", req, res) => {
res.sendFile(absolutePath)
};

app.get("/", (req, res) => {
  res.type('text').send('Hello Express');
});

module.exports = app;
