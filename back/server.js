const express = require('express');
const cors = require('cors');
require('dotenv').config();

const carsRouter = require('./routes/cars');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: [
      'http://localhost:3000', 
      'http://127.0.0.1:3000'
    ]
  })
);

app.use('/', carsRouter);

app.listen(process.env.SERVER_PORT);