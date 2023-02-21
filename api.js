const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let items = [];

app.use(cors());
app.use(bodyParser.json());

app.get('/product', (req, res) => {
  res.json(items);
});

app.post('/product', (req, res) => {
  items.push(req.body);
  res.json(items);
});

app.put('/product/:id', (req, res) => {
  const id = req.params.id;
  items[id] = req.body;
  res.json(items);
});

app.delete('/product/:id', (req, res) => {
  const id = req.params.id;
  items.splice(id, 1);
  res.json(items);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});