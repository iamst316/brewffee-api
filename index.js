const express = require("express");
const app = express();
require("dotenv").config();
const {PORT, MONGO_URL} = process.env;
app.use(express.json());
const {routers} = require("./Routes/authRoutes.js")
const mongoose = require("mongoose");

const {Inject} = require("./Models/injection.js")

mongoose.connect(MONGO_URL)
  .then(()=>{
    console.log("MONGO DB connected successfully")
    Inject();
  })
  .catch((err)=> console.log(err))

app.listen(PORT, ()=>{
  console.log("Server listening on PORT",PORT);
})

app.use("/",routers)
