const express = require('express');
const app = express();
const PORT = 4000;

const api = require('./api');

app.get('/', (req, res) => res.json({ message: 'Hello world!' }));

app.get('/search/photos', (req, res) => {
  const { query } = req.query;
  res.json(api.get(query));
});

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}`));
