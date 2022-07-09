import React, {Component} from 'react';
import axios from 'axios';

class CreateReport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p id='reportHeader'>Start a new book report: </p>
        <form className='createReport' onSubmit={this.props.handleSubmit}>
          <label className='reportForm' name='startDate'>Start Date:&nbsp;&nbsp;
            <input type='date' name='startDate' onChange={this.props.handleChange}></input>
          </label><br/><br/>
          <label className='reportForm' name='endDate'>End Date:&nbsp;&nbsp;
            <input type='date' name='endDate' onChange={this.props.handleChange}></input>
          </label><br/><br/>
          {/* <label className='reportForm' name='status'>Status<span id='mandatory'>*</span>:&nbsp;&nbsp;
            <input type='radio' value='In Progress' name='status' onChange={this.props.handleChange} required></input>In Progress
            <input type='radio' value='Finished' name='status' onChange={this.props.handleChange}></input>Finished
          </label><br/><br/> */}
          <label className='reportForm' name='title'>Title<span id='mandatory'>*</span>:&nbsp;&nbsp;
            <input type='text' name='title' onChange={this.props.handleChange}></input>
          </label><br/><br/>
          <label className='reportForm' name='author'>Author<span id='mandatory'>*</span>:&nbsp;&nbsp;
            <input type='text' name='author' onChange={this.props.handleChange}></input>
          </label><br/><br/>
          <label className='reportForm' name='genre'>Genre:&nbsp;&nbsp;
            <select name ='genre' onChange={this.props.handleChange}>
              <option value='' name='genre'>Select genre: </option>
              <option value='Action/Adventure' name ='genre' >Action/Adventure</option>
              <option value='Biography' name ='genre' >Biography</option>
              <option value='Classics' name ='genre' >Classics</option>
              <option value='Comic Book/Graphic Novel' name ='genre' >Comic Book/Graphic Novel</option>
              <option value='Fantasy' name ='genre' >Fantasy</option>
              <option value='History' name ='genre' >History</option>
              <option value='Horror' name ='genre' >Horror</option>
              <option value='Humor' name ='genre' >Humor</option>
              <option value='Fiction' name ='genre' >Fiction</option>
              <option value='Mystery' name ='genre' >Mystery</option>
              <option value='Non-fiction' name ='genre' >Nonfiction</option>
              <option value='Poetry' name ='genre' >Poetry</option>
              <option value='Romance' name ='genre' >Romance</option>
              <option value='Science Fiction' name ='genre' >Science Fiction</option>
              <option value='Self-Help' name ='genre' >Self-Help</option>
              <option value='Short Stories' name ='genre' >Short Stories</option>
              <option value='Suspense/Thriller' name ='genre' >Suspense/Thriller</option>
            </select>
          </label><br/><br/>
          <label className='reportForm' name='rating'>Rating<span id='mandatory'>*</span>:&nbsp;&nbsp;
            <select name='rating' onChange={this.props.handleChange} required>
              <option value='' name='rating'>Select rating: </option>
              <option value='5' name='rating'>5</option>
              <option value='4' name='rating'>4</option>
              <option value='3' name='rating'>3</option>
              <option value='2' name='rating'>2</option>
              <option value='1' name='rating'>1</option>
            </select>
          </label><br/><br/>
          <label className='reportForm' name='summary'>Summary<span id='mandatory'>*</span>: <br/>
            <textarea className='reportForm' name='summary' cols='50' rows='6' placeholder='In your own words...' onChange={this.props.handleChange} required></textarea>
          </label><br/><br/>
          <input className='reportFormBtn' type='submit' value='SUBMIT'></input>
        </form>
      </div>
    )
  }
}

export default CreateReport;