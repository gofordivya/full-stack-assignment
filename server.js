const express = require("express");
const app = express();
const router = require("./config/router");
require("./config/mongoose");

app.set(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(router);

//port to listen
app.listen(3000);
