const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.load({ path: '.env' });

const PORT = process.env.PORT || 3030;
const app = express();


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));
app.use(express.static('dist'));


// Controllers
const contactCtrl = require('./controllers/contactController');


// Routes
app.post('/contact', contactCtrl.post);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});


// Server
app.listen(PORT, () => {
  console.log(`App is up on port ${PORT}`);
});
