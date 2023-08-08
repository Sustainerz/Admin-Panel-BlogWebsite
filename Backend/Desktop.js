const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());
const mongoURI = 'mongodb://127.0.0.1:27017/Test';

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    app.use('/api', require('./Routes/Crud'))

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.listen(3002, () => {
    console.log("App running on 3002")
  });

