const express = require('express');
const path = require('path');

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../', 'client')));

app.get('/', (req, res) => {
  res.send('testing server');
});

app.listen(PORT, () => {
  console.log('Listening on PORT 3003');
});