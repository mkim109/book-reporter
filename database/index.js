const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/bookReports', {useNewUrlParser: true, useUnifiedTopology: true});

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
  // console.log('database data params', data);
  Report.create({
    startDate: data.startDate,
    endDate: data.endDate,
    status: data.status,
    rating: data.rating,
    title: data.title,
    author: data.author,
    genre: data.genre,
    summary: data.summary
  }, (err, data) => {
    if (err) {
      // console.log('db createReport error', err);
      cb(err, null);
    } else {
      // console.log('db createReport success data', data);
      cb(null, data);
    }
  });
};

const getAllReports = (cb) => {
  Report.find({}).exec((err, data) => {
    if (err) {
      // console.log('db getAllReports error', err);
      cb(err, null);
    } else if (data) {
      // console.log('db getReports success data', data);
      cb(null, data);
    }
  });
};

const getReport = (title, cb) => {
  let searchTitle = title;
  console.log('db searchTitle', searchTitle);
  Report.find({ title: searchTitle }).exec((err, data) => {
    if (err) {
      // console.log('db getReport error', err);
      cb(err, null);
    } else {
      // console.log('db getReport success', data);
      cb(null, data);
    }
  });
};

const deleteReports = (cb) => {
  Report.deleteMany({}).exec((err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = {
  createReport: createReport,
  getAllReports: getAllReports,
  getReport: getReport,
  deleteReports: deleteReports
};