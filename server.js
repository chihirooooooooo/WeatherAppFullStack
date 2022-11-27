const express = require("express");
const request = require("request");
const app = express();
const PORT = 3001;


app.use(express.static("public"));




app.listen(PORT, console.log("server launched"));