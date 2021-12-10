import React from 'react';
import axios from 'axios';
import InProgress from './InProgress.jsx';
import Finished from './Finished.jsx';

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // progress: [],
      reports: this.props.reports,
      current: null
    };
    // this.sortReports = this.sortReports.bind(this);
    this.getReport = this.getReport.bind(this);
  }

  // componentDidMount() {
  //   this.sortReports(this.props.reports);
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.reports !== prevProps.reports) {
      this.setState({
        reports: this.props.reports
      });
    }
  }

  // sortReports(reports) {
  //   let finished = [];
  //   let progress = [];
  //   reports.forEach(rep => {
  //     if (rep.status === 'Finished') {
  //       finished.push(rep);
  //     } else if (rep.status === 'In Progress') {
  //       progress.push(rep);
  //     }
  //   });
  //   this.setState({
  //     progress: progress,
  //     finished: finished
  //   });
  // }

  getReport(title, e) {
    e.preventDefault();
    // console.log('client title', { params: title });
    axios.get('/report', { params: { title }} )
      .then(res => {
        // console.log('client getReport res', res);
        this.setState({
          current: res.data
        });
      })
      .catch(err => {
        console.log('client getReport err', err);
      });
  }



  render() {
    return (
      <div className='archive'>
        <p className='archiveTitle'>Archive: </p>
        {/* <p className='inProgressHeader'>IN PROGRESS</p>
        <InProgress reports={this.state.progress}/> */}
        {/* <p className='finishedHeader'>FINISHED</p> */}
        <Finished reports={this.state.reports} getReport={this.getReport}/><br/><br/><br/><br/>
        <button className='resetBtn' onClick={this.props.deleteAll}>RESET</button>
      </div>
    )
  }
}

export default Archive;