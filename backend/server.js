require('dotenv').config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");

const { ObjectId } = require("mongodb");

const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 27017);

// Enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});
  
  // ✅ Start the Server
  const port = process.env.PORT || 27017;
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });