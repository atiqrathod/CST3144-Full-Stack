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

// ✅ Connect to MongoDB Atlas using mongoose
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'webstore', // Specify the database name
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ Connection error:', err));

const db = mongoose.connection;
// Define a generic function to get a collection
function getCollection(name) {
  return db.collection(name);
}

// ✅ API Routes
app.get("/", (req, res) => {
  res.send("Select a collection, e.g., /collection/messages");
});

 // Fetch all documents from a collection
 app.get("/collection/:collectionName", async (req, res, next) => {
  try {
    const collection = getCollection(req.params.collectionName);
    const results = await collection.find({}).toArray();
    res.send(results);
  } catch (e) {
    next(e);
  }
});

// ✅ Start the Server
const port = process.env.PORT || 27017;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});