import React from 'react';

const Finished = (props) => {
  if (props.reports.length > 0) {
    return (
      <div>
        {props.reports.map((report) => (
          <li className='finishedItems' key={report.title} onClick={(e) => props.getReport(report.title, e)}>{report.title} - {report.author}</li>
        ))}
      </div>
    )
  } else if (props.reports.length === 0) {
    return (
      <></>
    )
  }
}

export default Finished;