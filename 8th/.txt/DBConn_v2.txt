const mongoose = require("mongoose");
require("dotenv").config({ path : "db_url.env"});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
        console.log("Connected to database!")
    })
  .catch(() => {
    console.log("Connection failed...");
    })