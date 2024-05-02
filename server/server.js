// server.js

const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const testRoute = require('./routes/test');

const app = express();
const PORT = process.env.SERVER_PORT || 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Server is alive');
});

// Routes
app.use('/test', testRoute);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { app, server };