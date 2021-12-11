import React, {useState} from 'react';

const Finished = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  if (props.reports.length > 0) {
    return (
      <div>
        {props.reports.map((report) => (
          <div key={report.title} className='collapsible'>
            <li className='finishedItems' onClick={() => setIsOpen(!isOpen)}>{report.title} - {report.author}</li>
            { isOpen && <div className='content'>
              <p><span className='listTitle'>Start Date:</span> {report.startDate ? report.startDate.substring(0, 10) : ''}</p>
              <p><span className='listTitle'>End Date:</span> {report.endDate ? report.endDate.substring(0, 10) : ''}</p>
              <p><span className='listTitle'>Rating:</span> {report.rating} / 5</p>
              <p><span className='listTitle'>Genre:</span> {report.genre ? report.genre : ''}</p>
              <p><span className='listTitle'>Summary:</span> <br/>{report.summary}</p>
            </div> }
          </div>
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





// if (props.reports.length > 0) {
//   return (
//     <div>
//       {props.reports.map((report) => (
//         <div key={report.title} >
//           <a href='#nav'><li className='finishedItems'>{report.title} - {report.author}</li></a>
//           <div className='expandable' id='nav'>
//             <p><span className='listTitle'>Start Date:</span> {report.startDate ? report.startDate.substring(0, 10) : ''}</p>
//             <p><span className='listTitle'>End Date:</span> {report.endDate ? report.endDate.substring(0, 10) : ''}</p>
//             <p><span className='listTitle'>Rating:</span> {report.rating} / 5</p>
//             <p><span className='listTitle'>Genre:</span> {report.genre ? report.genre : ''}</p>
//             <p><span className='listTitle'>Summary:</span> <br/>{report.summary}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// } else if (props.reports.length === 0) {
//   return (
//     <></>
//   )
// }