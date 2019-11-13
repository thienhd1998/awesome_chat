import session from "express-session";
import connectMongo from "connect-mongo";

let MongoStore = connectMongo(session);

let sessionStore = new MongoStore({
  url: 'mongodb://localhost:27017/awesome_chat' ,//`${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  autoReconnect: true,
  autoRemove: "native"
});

let configSession = (app) => {
  app.use(session({
    key: "express.sid",
    secret: "mySecret",
    Sstore: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 86400 seconds = 1 day
    }
  }))
};  

module.exports = configSession;