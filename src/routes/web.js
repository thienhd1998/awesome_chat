import express from "express";
import {home, auth, user, contact, notification} from "./../controllers/index";
import {authValid, userValid, contactValid} from "../validation/index";
import passport from "passport"; 
import initPassportLocal from "./../controllers/passportController/local";
import initPassportFacebook from "./../controllers/passportController/facebook";
import initPassportGoogle from "./../controllers/passportController/google";

// Init all passport
initPassportLocal();
initPassportFacebook();
initPassportGoogle();

let router = express.Router();

// Init all routes, app from exactly express module

let initRoutes = (app) => {
  // Login local account
  router.get("/login-register", auth.checkLoggedOut, auth.getLoginRegister);
  router.post("/register", auth.checkLoggedOut, authValid.register, auth.postRegister);
  router.get("/verify/:token", auth.checkLoggedOut, auth.verifyAccount);
  router.post("/login", auth.checkLoggedOut, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login-register",
    successFlash: true,
    failureFlash: true
  }));

  // Login by facebook account
  router.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));
  router.get("/auth/facebook/callback", passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login-register"
  }));

  // Login by google account
  router.get("/auth/google", passport.authenticate("google", { scope: ["openid", "email", "profile"] }));
  router.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login-register"
  }));

  // Logout
  router.get("/", auth.checkLoggedIn, home.getHome);  
  router.get("/logout", auth.checkLoggedIn, auth.getLogout);

  // Information Account
  router.put("/user/update-avatar", auth.checkLoggedIn, user.updateAvatar); 
  router.put("/user/update-info", auth.checkLoggedIn, userValid.updateInfo, user.updateInfo); 
  router.put("/user/update-password", auth.checkLoggedIn, userValid.updatePassword, user.updatePassword);

  // Contact
  router.get("/contact/find-users/:keyword", auth.checkLoggedIn, contactValid.findUsersContact, contact.findUsersContact);
  router.post("/contact/add-new", auth.checkLoggedIn, contact.addNew); 
  router.delete("/contact/remove-request-contact", auth.checkLoggedIn, contact.removeRequestContact); 
  
  // Notification
  router.get("/notification/read-more", auth.checkLoggedIn, notification.readMore); 
  router.put("/notification/mark-all-as-read", auth.checkLoggedIn, notification.markAllAsRead); 

  return app.use("/", router);
};

module.exports = initRoutes;