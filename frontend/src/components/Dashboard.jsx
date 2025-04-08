// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faUser,
//   faCalendar,
//   faSignOutAlt,
//   faChartLine,
//   faArrowUp,
//   faFileAlt,
//   faAward,
//   faExclamationCircle,
//   faCogs,
//   faHistory,
//   faSearch,
//   faGraduationCap,
//   faClipboardList,
//   faFile,
//   faUmbrellaBeach,
//   faUsers,
//   faChartPie,
//   faTachometerAlt,
// } from '@fortawesome/free-solid-svg-icons';
// import '../Dashboard.css'; // Ensure this import is correct

// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <h1>Human Resources Management System</h1>
//       <div className="grid-container">
//         {/* Employee Information */}
//         <div className="grid-item" onClick={() => alert('Navigate to Employee Information')}>
//           <h2>
//             <FontAwesomeIcon icon={faUser} /> 
//           </h2>
//           <h2> Employee Information </h2>
//           <p>Personal details, education, experience, skills, travels</p>
//         </div>

//         {/* Appointments */}
//         <div className="grid-item" onClick={() => alert('Navigate to Appointments')}>
//           <h2>
//             <FontAwesomeIcon icon={faCalendar} /> 
//           </h2>
//           <h2> Appointments </h2>
//           <p>Employee appointments and positions</p>
//         </div>

//         {/* Separation */}
//         <div className="grid-item" onClick={() => alert('Navigate to Separation')}>
//           <h2>
//             <FontAwesomeIcon icon={faSignOutAlt} /> 
//           </h2>
//           <h2> Separation </h2>
//           <p>Separation, termination, active and inactive employees</p>
//         </div>

//         {/* Evaluation */}
//         <div className="grid-item" onClick={() => alert('Navigate to Evaluation')}>
//           <h2>
//             <FontAwesomeIcon icon={faChartLine} /> 
//           </h2>
//           <h2> Evaluation </h2>
//           <p>Performance evaluation and assessment</p>
//         </div>

//         {/* Promotions */}
//         <div className="grid-item" onClick={() => alert('Navigate to Promotions')}>
//           <h2>
//             <FontAwesomeIcon icon={faArrowUp} /> 
//           </h2>
//           <h2> Promotions </h2>
//           <p>Employee promotions and future opportunities</p>
//         </div>

//         {/* Appointment Reports */}
//         <div className="grid-item" onClick={() => alert('Navigate to Appointment Reports')}>
//           <h2>
//             <FontAwesomeIcon icon={faFileAlt} /> 
//           </h2>
//           <h2> Appointment Reports </h2>
//           <p>Appointment reports</p>
//         </div>

//         {/* Rewards */}
//         <div className="grid-item" onClick={() => alert('Navigate to Rewards')}>
//           <h2>
//             <FontAwesomeIcon icon={faAward} /> 
//           </h2>
//           <h2> Rewards </h2>
//           <p>Rewards, bonuses, achievements, recognition</p>
//         </div>

//         {/* Penalties */}
//         <div className="grid-item" onClick={() => alert('Navigate to Penalties')}>
//           <h2>
//             <FontAwesomeIcon icon={faExclamationCircle} /> 
//           </h2>
//           <h2> Penalties </h2>
//           <p>Disciplinary actions based on performance</p>
//         </div>

//         {/* Skills & Language */}
//         <div className="grid-item" onClick={() => alert('Navigate to Skills & Language')}>
//           <h2>
//             <FontAwesomeIcon icon={faCogs} /> 
//           </h2>
//           <h2> Skills & Language </h2>
//           <p>Employee skills, languages, and training</p>
//         </div>

//         {/* Employee Records */}
//         <div className="grid-item" onClick={() => alert('Navigate to Employee Records')}>
//           <h2>
//             <FontAwesomeIcon icon={faHistory} /> 
//           </h2>
//           <h2> Employee Records </h2>
//           <p>Employee history and records</p>
//         </div>

//         {/* Search */}
//         <div className="grid-item" onClick={() => alert('Navigate to Search')}>
//           <h2>
//             <FontAwesomeIcon icon={faSearch} /> 
//           </h2>
//           <h2> Search </h2>
//           <p>Employee search</p>
//         </div>

//         {/* General Reports */}
//         <div className="grid-item" onClick={() => alert('Navigate to General Reports')}>
//           <h2>
//             <FontAwesomeIcon icon={faFile} /> 
//           </h2>
//           <h2> General Reports </h2>
//           <p>General reports and statistics</p>
//         </div>

//         {/* Retirement */}
//         <div className="grid-item" onClick={() => alert('Navigate to Retirement')}>
//           <h2>
//             <FontAwesomeIcon icon={faUmbrellaBeach} /> 
//           </h2>
//           <h2> Retirement </h2>
//           <p>Retirement planning and benefits</p>
//         </div>

//         {/* Retirees Report */}
//         <div className="grid-item" onClick={() => alert('Navigate to Retirees Report')}>
//           <h2>
//             <FontAwesomeIcon icon={faUsers} /> 
//           </h2>
//           <h2> Retirees Report </h2>
//           <p>Reports on retirees</p>
//         </div>

//         {/* Analytics */}
//         <div className="grid-item" onClick={() => alert('Navigate to Analytics')}>
//           <h2>
//             <FontAwesomeIcon icon={faChartPie} /> 
//           </h2>
//           <h2> Analytics </h2>
//           <p>HR analytics and organizational insights</p>
//         </div>

//         {/* Performance Reports */}
//         <div className="grid-item" onClick={() => alert('Navigate to Performance Reports')}>
//           <h2>
//             <FontAwesomeIcon icon={faTachometerAlt} /> 
//           </h2>
//           <h2> Performance Reports </h2>
//           <p>Employee performance, rewards, and penalties reports</p>
//         </div>

//         {/* Education */}
//         <div className="grid-item" onClick={() => alert('Navigate to Education')}>
//           <h2>
//             <FontAwesomeIcon icon={faGraduationCap} /> 
//           </h2>
//           <h2> Education </h2>
//           <p>Employee education and training</p>
//         </div>

//         {/* Employee General Report */}
//         <div className="grid-item" onClick={() => alert('Navigate to Employee General Report')}>
//           <h2>
//             <FontAwesomeIcon icon={faFileAlt} /> 
//           </h2>
//           <h2> Employee General Report </h2>
//           <p>General employee reports</p>
//         </div>

//         {/* Selection General Report */}
//         <div className="grid-item" onClick={() => alert('Navigate to Selection General Report')}>
//           <h2>
//             <FontAwesomeIcon icon={faClipboardList} /> 
//           </h2>
//           <h2> Selection General Report </h2>
//           <p>General selection reports</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;





import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCalendar,
  faSignOutAlt,
  faChartLine,
  faArrowUp,
  faFileAlt,
  faAward,
  faExclamationCircle,
  faCogs,
  faHistory,
  faSearch,
  faGraduationCap,
  faClipboardList,
  faFile,
  faUmbrellaBeach,
  faUsers,
  faChartPie,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Dashboard.css';

function Dashboard() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="dashboard">
      <h1>Human Resources Management System</h1>
      <div className="grid-container">
        {/* Employee Information */}
        <div className="grid-item" onClick={() => navigate('/employee-info')}>
          <h2>
            <FontAwesomeIcon icon={faUser} /> 
          </h2>
          <h2> Employee Information </h2>
          <p>Personal details, education, experience, skills, travels</p>
        </div>

        {/* Appointments */}
        <div className="grid-item" onClick={() => navigate('/appointments')}>
          <h2>
            <FontAwesomeIcon icon={faCalendar} /> 
          </h2>
          <h2> Appointments </h2>
          <p>Employee appointments and positions</p>
        </div>

        {/* Separation */}
        <div className="grid-item" onClick={() => navigate('/separation')}>
          <h2>
            <FontAwesomeIcon icon={faSignOutAlt} /> 
          </h2>
          <h2> Separation </h2>
          <p>Separation, termination, active and inactive employees</p>
        </div>

        {/* Evaluation */}
        <div className="grid-item" onClick={() => navigate('/evaluation')}>
          <h2>
            <FontAwesomeIcon icon={faChartLine} /> 
          </h2>
          <h2> Evaluation </h2>
          <p>Performance evaluation and assessment</p>
        </div>

        {/* Promotions */}
        <div className="grid-item" onClick={() => navigate('/promotions')}>
          <h2>
            <FontAwesomeIcon icon={faArrowUp} /> 
          </h2>
          <h2> Promotions </h2>
          <p>Employee promotions and future opportunities</p>
        </div>

        {/* Appointment Reports */}
        <div className="grid-item" onClick={() => navigate('/appointment-reports')}>
          <h2>
            <FontAwesomeIcon icon={faFileAlt} /> 
          </h2>
          <h2> Appointment Reports </h2>
          <p>Appointment reports</p>
        </div>

        {/* Rewards */}
        <div className="grid-item" onClick={() => navigate('/rewards')}>
          <h2>
            <FontAwesomeIcon icon={faAward} /> 
          </h2>
          <h2> Rewards </h2>
          <p>Rewards, bonuses, achievements, recognition</p>
        </div>

        {/* Penalties */}
        <div className="grid-item" onClick={() => navigate('/penalties')}>
          <h2>
            <FontAwesomeIcon icon={faExclamationCircle} /> 
          </h2>
          <h2> Penalties </h2>
          <p>Disciplinary actions based on performance</p>
        </div>

        {/* Skills & Language */}
        <div className="grid-item" onClick={() => navigate('/skills-language')}>
          <h2>
            <FontAwesomeIcon icon={faCogs} /> 
          </h2>
          <h2> Skills & Language </h2>
          <p>Employee skills, languages, and training</p>
        </div>

        {/* Employee Records */}
        <div className="grid-item" onClick={() => navigate('/employee-records')}>
          <h2>
            <FontAwesomeIcon icon={faHistory} /> 
          </h2>
          <h2> Employee Records </h2>
          <p>Employee history and records</p>
        </div>

        {/* Search */}
        <div className="grid-item" onClick={() => navigate('/search')}>
          <h2>
            <FontAwesomeIcon icon={faSearch} /> 
          </h2>
          <h2> Search </h2>
          <p>Employee search</p>
        </div>

        {/* General Reports */}
        <div className="grid-item" onClick={() => navigate('/general-reports')}>
          <h2>
            <FontAwesomeIcon icon={faFile} /> 
          </h2>
          <h2> General Reports </h2>
          <p>General reports and statistics</p>
        </div>

        {/* Retirement */}
        <div className="grid-item" onClick={() => navigate('/retirement')}>
          <h2>
            <FontAwesomeIcon icon={faUmbrellaBeach} /> 
          </h2>
          <h2> Retirement </h2>
          <p>Retirement planning and benefits</p>
        </div>

        {/* Retirees Report */}
        <div className="grid-item" onClick={() => navigate('/retirees-report')}>
          <h2>
            <FontAwesomeIcon icon={faUsers} /> 
          </h2>
          <h2> Retirees Report </h2>
          <p>Reports on retirees</p>
        </div>

        {/* Analytics */}
        <div className="grid-item" onClick={() => navigate('/analytics')}>
          <h2>
            <FontAwesomeIcon icon={faChartPie} /> 
          </h2>
          <h2> Analytics </h2>
          <p>HR analytics and organizational insights</p>
        </div>

        {/* Performance Reports */}
        <div className="grid-item" onClick={() => navigate('/performance-reports')}>
          <h2>
            <FontAwesomeIcon icon={faTachometerAlt} /> 
          </h2>
          <h2> Performance Reports </h2>
          <p>Employee performance, rewards, and penalties reports</p>
        </div>

        {/* Education */}
        <div className="grid-item" onClick={() => navigate('/education')}>
          <h2>
            <FontAwesomeIcon icon={faGraduationCap} /> 
          </h2>
          <h2> Education </h2>
          <p>Employee education and training</p>
        </div>

        {/* Employee General Report */}
        <div className="grid-item" onClick={() => navigate('/employee-general-report')}>
          <h2>
            <FontAwesomeIcon icon={faFileAlt} /> 
          </h2>
          <h2> Employee General Report </h2>
          <p>General employee reports</p>
        </div>

        {/* Selection General Report */}
        <div className="grid-item" onClick={() => navigate('/selection-general-report')}>
          <h2>
            <FontAwesomeIcon icon={faClipboardList} /> 
          </h2>
          <h2> Selection General Report </h2>
          <p>General selection reports</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;