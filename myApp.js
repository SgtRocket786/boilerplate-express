let express = require("express");
let app = express();
let absolutePath = _dirname + "/views/index.html";

app.get("/", req, res) => {
res.sendFile(absolutePath)
};


module.exports = app;
