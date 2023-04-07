import React, { forwardRef } from 'react';
import '../styles/schedule.css';
import schedule from '../constants/schedule.js';

const Schedule = forwardRef((props, ref) => (
  <div className="section schedule">
    <h2>Schedule</h2>
    <table>
      {schedule.map(({ venue, date }, idx) => (
        <tr key={date + String(idx)}>
          <td>{venue}</td>
          <td>{date}</td>
        </tr>
      ))}
    </table>
  </div>
));

export default Schedule;
