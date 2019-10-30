import express from "express";
import ConnectDB from "./config/connectDB";
import ContactModel from "./models/contact.model";
require('dotenv').config(); 

let app = express();

// connect to MongoDB
ConnectDB(); 

app.get("/test-database", async (req, res) => {
  try {
    let item = {
      userId: "25101998",
      contactId: "2510199825101998",
    };
    let contact = await ContactModel.createNew(item);
    res.send(contact);
  } catch (err) {
    console.log(err);
  } 
});

app.listen(process.env.port, process.env.hostname, () => {
  console.log(`Hello Thien,I'm running at ${process.env.hostname}:${process.env.port}/`);
});
