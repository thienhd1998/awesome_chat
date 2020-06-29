// Use env environment
require('dotenv').config(); 

import express from "express";

// Use config
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import session from "./config/session";
import configSocketIo from "./config/socketio";
import initSockets from "./sockets/index";

// Use router
import initRoutes from "./routes/web";

// Use post data for request
import bodyParser from "body-parser";

// Use cookie
import cookieParser from "cookie-parser";

// Use flash message
import connectFlash from "connect-flash";
import passport from "passport";

// Use socket io
import http from "http";
import socketio from "socket.io";

import pem from "pem";
import https from "https";

// Init app 
let app = express();

// Init server with socket.io & express app
let server = http.createServer(app);
let io = socketio(server);

// connect to MongoDB
ConnectDB();

// config session
session.config(app);

// Config view engine
configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

// Enable flash messages
app.use(connectFlash());

// Use Cookie Parser
app.use(cookieParser());

// Config passport js
app.use(passport.initialize());
app.use(passport.session());

// init all routes
initRoutes(app);

// Config for socket.io
configSocketIo(io, cookieParser, session.sessionStore);

// init all sockets
initSockets(io);

server.listen(process.env.port, process.env.hostname, () => {
  console.log(`Hello Thien,I'm running at ${process.env.hostname}:${process.env.port}/`);
});

/*
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
}); */

