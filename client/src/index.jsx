import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CreateReport from './components/CreateReport.jsx';
import Archive from './components/Archive.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      genre: '',
      startDate: '',
      endDate: '',
      status: '',
      rating: '',
      summary: '',
      reports: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getAllReports = this.getAllReports.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  componentDidMount() {
    this.getAllReports();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      status: this.state.status,
      rating: this.state.rating,
      summary: this.state.summary
    };
    axios.post('/report', data)
      .then(res => {
        this.getAllReports();
        e.target.reset();
      })
      .catch(err => {
        alert('Error creating report');
      });
  }

  getAllReports() {
    axios.get('/reports')
      .then(res => {
        this.setState({
          reports: res.data
        });
      })
      .catch(err => {
        console.log('client getAllReports err', err);
      });
  }

  deleteAll(e) {
    e.preventDefault();
    axios.delete('/reports')
      .then(res => {
        this.getAllReports();
      })
      .catch(err => {
        console.log(err);
        alert('Error clearing archive. Please try again.');
      });
  }

  render() {
    return (
      <div className='mainContainer'>
        <p id='title'>Book Reporter</p>
        <div className='centerContainer'>
          <CreateReport handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          <Archive reports={this.state.reports} deleteAll={this.deleteAll}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));