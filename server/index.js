const express = require('express');
const path = require('path');
const axios = require('axios');
const { createReport, getReports } = require('../database/index.js');

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../', 'client')));

app.get('/report', (req, res) => {
  return getReports((err, data) => {
    if (err) {
      console.log('server getReports err', err);
      res.sendStatus(400);
    } else if (data) {
      console.log('server getReports success data', data);
      res.status(200).send(data);
    }
  });
});

app.post('/report', (req, res) => {
  console.log('server query', req.body);
  // manipulate req.body data if needed

  return createReport(data, (err, data) => {
    if (err) {
      console.log('server error', err);
      res.sendStatus(400);
    } else if (data) {
      console.log('server success data', data);
      res.status(201).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log('Listening on PORT 3003');
});