const express = require('express');
const morgan = require('morgan');
const api = require('./index');

const PORT = 4000;
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ message: 'Hello world!' }));

app.get('/search/photos', (req, res) => {
  const { query } = req.query;
  res.json(api.get(query));
});

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}`));
