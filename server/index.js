const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/route');
const app = express();


const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.dwwrfmy.mongodb.net/mydatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

app.use(cors())

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', Router)
const PORT = 8800;


app.listen(PORT, () => {
  console.log(`Your server is running successfully on PORT ${PORT}`);
});