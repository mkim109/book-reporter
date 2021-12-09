const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookReports', {useNewUrlParser: true, useUnifiedTopology: true});

const reportSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  status: String,
  rating: Number,
  title: String,
  author: String,
  genre: String,
  summary: String
});

const Report = mongoose.model('Report', reportSchema);

const createReport = (data, cb) => {
  Report.create({
    startDate: Date,
    endDate: Date,
    status: String,
    rating: Number,
    title: String,
    author: String,
    genre: String,
    summary: String
  }).exec((err, data) => {
    if (err) {
      console.log('db createReport error', err);
      cb(err, null);
    } else if (data) {
      console.log('db createReport success data', data);
      cb(null, data);
    }
  });
};

const getReports = (cb) => {
  Report.find({}).exec((err, data) => {
    if (err) {
      console.log('db getReports error', err);
    } else if (data) {
      console.log('db getReports success data', data);
      cb(null, data);
    }
  });
};

module.exports = {
  createReport: createReport,
  getReports: getReports
};