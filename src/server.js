require('dotenv').config(); 

import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";
import passport from "passport";

import pem from "pem";
import https from "https";

pem.config({
  pathOpenSSL: 'C:\\Program Files\\OpenSSL-Win64\\bin\\openssl'
})

pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
  if (err) {
    throw err;
  }

  // Init app 
  let app = express();

  // connect to MongoDB
  ConnectDB();

  // config session
  configSession(app);

  // Config view engine
  configViewEngine(app);

  // Enable post data for request
  app.use(bodyParser.urlencoded({extended: true}));

  // Enable flash messages
  app.use(connectFlash());

  // Config passport js
  app.use(passport.initialize());
  app.use(passport.session());

  // init all routes
  initRoutes(app);
 
  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(process.env.port, process.env.hostname, () => {
    console.log(`Hello Thien,I'm running at ${process.env.hostname}:${process.env.port}/`);
  });
});
/*
// Init app 
let app = express();

// connect to MongoDB
ConnectDB();

// config session
configSession(app);

// Config view engine
configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

// Enable flash messages
app.use(connectFlash());

// Config passport js
app.use(passport.initialize());
app.use(passport.session());

// init all routes
initRoutes(app);

app.listen(process.env.port, process.env.hostname, () => {
  console.log(`Hello Thien,I'm running at ${process.env.hostname}:${process.env.port}/`);
});
*/