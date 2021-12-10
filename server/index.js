const express = require('express');
const path = require('path');
const axios = require('axios');
const { createReport, getAllReports, getReport, deleteReports } = require('../database/index.js');

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../', 'client')));

app.get('/reports', (req, res) => {
  return getAllReports((err, data) => {
    if (err) {
      // console.log('server getReports err', err);
      res.sendStatus(400);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/report', (req, res) => {
  // console.log('server getReport req', req.query)
  return getReport(req.query.title, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.status(200).send(data);
    }
  });
})

app.post('/report', (req, res) => {
  return createReport(req.body, (err, data) => {
    if (err) {
      // console.log('server error', err);
      res.sendStatus(400);
    } else if (data) {
      // console.log('server success data', data);
      res.status(201).send(data);
    }
  });
});

app.delete('/reports', (req, res) => {
  return deleteReports((err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(PORT, () => {
  console.log('Listening on PORT 3003');
});