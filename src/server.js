require('dotenv').config(); 

import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";

// Init app 
let app = express();

// connect to MongoDB
ConnectDB();

// Config view engine
configViewEngine(app);

// init all routes
initRoutes(app);

app.listen(process.env.port, process.env.hostname, () => {
  console.log(`Hello Thien,I'm running at ${process.env.hostname}:${process.env.port}/`);
});
