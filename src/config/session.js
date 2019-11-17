import session from "express-session";
import connectMongo from "connect-mongo";

require('dotenv').config(); 

let MongoStore = connectMongo(session);

let sessionStore = new MongoStore({
  url: `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, // 'mongodb://localhost:27017/awesome_chat' ,//
  autoReconnect: true
  //autoRemove: "native"
});

let configSession = (app) => {
  app.use(session({
    key: "express.sid",
    secret: "mySecret",
    store: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 86400 seconds = 1 day
    }
  }))
};  

module.exports = configSession;