import React from 'react';
import InProgress from './InProgress.jsx';
import Finished from './Finished.jsx';

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='archive'>
        <p className='archiveTitle'>ARCHIVE: </p>
        <InProgress />
        <Finished />
      </div>
    )
  }
}

export default Archive;