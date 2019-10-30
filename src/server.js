require('dotenv').config(); 

import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";

// Init app 
let app = express();

// connect to MongoDB
ConnectDB();

// Config view engine
configViewEngine(app);

app.get("/", (req, res) => {
  return res.render("main/master");
});

app.get("/login-register", (req, res) => {
  return res. render("auth/loginRegister");
});

app.listen(process.env.port, process.env.hostname, () => {
  console.log(`Hello Thien,I'm running at ${process.env.hostname}:${process.env.port}/`);
});
