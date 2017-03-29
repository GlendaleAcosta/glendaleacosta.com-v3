const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.static('src'));
app.use(express.static('dist'));

// app.all('*', (req, res) => res.sendFile(path.join(__dirname, '/dist/index')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`App is up on port ${PORT}`);
});
