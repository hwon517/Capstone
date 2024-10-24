const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path : "db_url.env"});

const server = express();

const User = require("./models/ColUser");

require("dotenv").config({ path : "db_url.env"});

server.get("/", (req, res) => {
  const newUser = new User();
  newUser.email = "master@microlab.kr"
  newUser.name="master";
  newUser.age=25;

  newUser
    .save()
    .then((data) => {
        console.log(data);
        res.json({
          message: "User Create Successfully"
        });
      })
    .catch((err) => {
        console.log(err);
      res.json({
        message: "User Was not Successfully created"
      })
    })
});

server.listen(3000, (err) => {
  if(err) {
    return console.log(err);
  }
  mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch(() => {
    return console.log("Connection failed...");
  })
});