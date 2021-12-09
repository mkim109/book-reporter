import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CreateReport from './components/CreateReport.jsx';
import Archive from './components/Archive.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      status: '',
      rating: '',
      title: '',
      author: '',
      genre: '',
      summary: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('checking for state', this.state);
    let data = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      status: this.state.status,
      rating: this.state.rating,
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      summary: this.state.summary
    };
    axios.post('/report', data)
      .then(res => {
        console.log('client res', res);
        // alert('Success creating report');
      })
      .catch(err => {
        alert('Error creating report');
      });
  }


  render() {
    return (
      <div>
        <p id='title'>Book Reporter</p>
        <p id='reportHeader'>Start a new book report: </p>
        <CreateReport handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Archive />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));