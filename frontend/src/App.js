import Navbar from './components/Navbar.jsx';
import Titlebar from './components/Titlebar.jsx';
import Sidebar from './components/Sidebar.jsx';
import MyRouter from './router/index.js';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className='col-sm-12' >  
          <Navbar />
        </div>
        <div className='col-sm-2' >
        
          <Sidebar />
        </div>
        <div className='col-sm-10' style={{ paddingLeft: '20px'}}>
          
          <MyRouter />
        </div>
      
      </div>      
      <ToastContainer />
      
    </div>
  );
}

export default App;







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import EmployeeInfo from './components/Employeeinfo';
// import Navbar from './components/Navbar';
// import Separation from './components/Separation';
// import Evaluation from './components/Evaluation';
// import Promotions from './components/Promotions';
// import AppointmentReports from './components/AppointmentReports';
// import Rewards from './components/Rewards';
// import Penalties from './components/Penalties';
// import SkillsLanguage from './components/SkillsLanguage';
// import EmployeeRecords from './components/EmployeeRecords';
// import Search from './components/Search';
// import GeneralReports from './components/GeneralReports';
// import Retirement from './components/Retirement';
// import RetireesReport from './components/RetireesReport';
// import Analytics from './components/Analytics';
// import PerformanceReports from './components/PerformanceReports';
// import Education from './components/Education';
// import EmployeeGeneralReport from './components/EmployeeGeneralReport';
// import SelectionGeneralReport from './components/SelectionGeneralReport';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/employee-info" element={<EmployeeInfo />} />
//         <Route path="/employee-info" element={<Navbar />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;















// import Dashboard from './components/Dashbaord.jsx';


// function App() {
//   return (
//     <div className="App">
         
//       <Dashboard />

//     </div>
//   );
// }

// export default App;














// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;












































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
//   faFile,
//   faRetirement,
//   faUsers,
//   faChartPie,
//   faTachometerAlt,
// } from '@fortawesome/free-solid-svg-icons';
// import React from 'react';
// import EmployeeInfo from './components/EmployeeInfo';
// import Appointments from './components/Appointments';
// import Separation from './components/Separation';
// import Evaluation from './components/Evaluation';
// import Promotions from './components/Promotions';
// import AppointmentReports from './components/AppointmentReports';
// import Rewards from './components/Rewards';
// import Penalties from './components/Penalties';
// import SkillsLanguage from './components/SkillsLanguage';
// import EmployeeRecords from './components/EmployeeRecords';
// import Search from './components/Search';
// import GeneralReports from './components/GeneralReports';
// import Retirement from './components/Retirement';
// import RetireesReport from './components/RetireesReport';
// import Analytics from './components/Analytics';
// import PerformanceReports from './components/PerformanceReports';
// import Education from './components/Education';
// import EmployeeGeneralReport from './components/EmployeeGeneralReport';
// import SelectionGeneralReport from './components/SelectionGeneralReport';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Human Resources Management System</h1>
//       <div className='row'> 
//         <div className='col-sm-3'>
//           <EmployeeInfo />
//         </div>
//         <div className='col-sm-3'>
//           <Appointments />
//         </div>
//         <div className='col-sm-3'>
//           <Separation />
//         </div>
//         <div className='col-sm-3'>
//           <Separation />
//         </div>

//         <div className='col-sm-3'>
//           <Evaluation />
//         </div>
//         <div className='col-sm-3'>
//           <Promotions />
//         </div>
//         <div className='col-sm-3'>
//           <AppointmentReports />
//         </div>
//         <div className='col-sm-3'>
//           <Rewards />
//         </div>


//         <div className='col-sm-3'>
//           <Penalties />
//         </div>
//         <div className='col-sm-3'>
//           <SkillsLanguage />
//         </div>
//         <div className='col-sm-3'>
//           <EmployeeRecords />
//         </div>
//         <div className='col-sm-3'>
//           <Search />
//         </div>

//         <div className='col-sm-3'>
//           <GeneralReports />
//         </div>
//         <div className='col-sm-3'>
//           <Retirement />
//         </div>
//         <div className='col-sm-3'>
//           <RetireesReport />
//         </div>
//         <div className='col-sm-3'>
//           <Analytics />
//         </div>

//         <div className='col-sm-6'>
//           <Education />
//         </div>
       
        
//         <div className='col-sm-6'>
//           <SelectionGeneralReport />
//         </div>
//       </div>
    
      
      
      
      
//       {/* <PerformanceReports /> */}
      
//       {/* <EmployeeGeneralReport /> */}
      
      
//     </div>
//   );
// }

// export default App;






// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import EmployeeInfo from './components/EmployeeInfo';
// import AppointmentReports from './components/AppointmentReports';
// import Separation from './components/Separation';
// import Education from './components/Education';
// import Promotions from './components/Promotions';
// import Rewards from './components/Rewards';
// import Penalties from './components/Penalties';
// import SkillsLanguage from './components/SkillsLanguage';
// import EmployeeRecords from './components/EmployeeRecords';
// import Search from './components/Search';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="dashboard">
//         <h1>Human Resources Management System</h1>
//         <div className="grid-container">
//           <Link to="/employee-info">
//             <div className="grid-item">
//               <h2>Employee Information</h2>
//               <p>Personal details, education, experience, skills, travels</p>
//             </div>
//           </Link>
//           <Link to="/appointment-reports">
//             <div className="grid-item">
//               <h2>Appointment Reports</h2>
//               <p>Appointment reports</p>
//             </div>
//           </Link>
//           <Link to="/separation">
//             <div className="grid-item">
//               <h2>Separation</h2>
//               <p>Separation, termination, active and inactive employees</p>
//             </div>
//           </Link>
//           <Link to="/education">
//             <div className="grid-item">
//               <h2>Education</h2>
//               <p>Employee education and training</p>
//             </div>
//           </Link>
//           <Link to="/promotions">
//             <div className="grid-item">
//               <h2>Promotions</h2>
//               <p>Employee promotions and future opportunities</p>
//             </div>
//           </Link>
//           <Link to="/rewards">
//             <div className="grid-item">
//               <h2>Rewards</h2>
//               <p>Rewards, bonuses, achievements, recognition</p>
//             </div>
//           </Link>
//           <Link to="/penalties">
//             <div className="grid-item">
//               <h2>Penalties</h2>
//               <p>Disciplinary actions based on performance</p>
//             </div>
//           </Link>
//           <Link to="/skills-language">
//             <div className="grid-item">
//               <h2>Skills & Language</h2>
//               <p>Employee skills, languages, and training</p>
//             </div>
//           </Link>
//           <Link to="/employee-records">
//             <div className="grid-item">
//               <h2>Employee Records</h2>
//               <p>Employee history and records</p>
//             </div>
//           </Link>
//           <Link to="/search">
//             <div className="grid-item">
//               <h2>Search</h2>
//               <p>Employee search</p>
//             </div>
//           </Link>
//         </div>

//         <Routes>
//           <Route path="/employee-info" element={<EmployeeInfo />} />
//           <Route path="/appointment-reports" element={<AppointmentReports />} />
//           <Route path="/separation" element={<Separation />} />
//           <Route path="/education" element={<Education />} />
//           <Route path="/promotions" element={<Promotions />} />
//           <Route path="/rewards" element={<Rewards />} />
//           <Route path="/penalties" element={<Penalties />} />
//           <Route path="/skills-language" element={<SkillsLanguage />} />
//           <Route path="/employee-records" element={<EmployeeRecords />} />
//           <Route path="/search" element={<Search />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;