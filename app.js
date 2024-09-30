const path = require("path");

require("dotenv").config;
const express = require("express");
const bodyParser = require("body-parser");

const homeRouter = require("./routes/home");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouter);

app.listen(PORT, () => {
  console.log("<|> Server Running on Port 3000 <|>");
  console.log("<|> Link: http://localhost:3000 <|>");
});
