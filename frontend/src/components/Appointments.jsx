import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

function AppointmentReports() {
  return (
    <div >
      <h2>
        <FontAwesomeIcon icon={faFileAlt} /> 
      </h2>
      <h2> Appointment Reports </h2>
      <p>Appointment reports</p>
    </div>
  );
}

export default AppointmentReports;