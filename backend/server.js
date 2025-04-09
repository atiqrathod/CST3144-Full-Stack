require('dotenv').config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");

const { ObjectId } = require("mongodb");

const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 27017);


  
  // ✅ Start the Server
  const port = process.env.PORT || 27017;
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });