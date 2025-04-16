
import React from 'react';
import { Link } from 'react-router-dom';
// function Sidebar(){
//     return(
//     <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: '280px'}}>
//         <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
//         <svg class="bi pe-none me-2" width="40" height="32"></svg>
//         <span class="fs-4">Sidebar</span>
//         </Link> 
//         <hr/>
//         <ul className="nav nav-pills flex-column mb-auto">
//         <li className="nav-item">
//             <Link to="#" class="nav-link active" aria-current="page">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Home
//             </Link>
            
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Employee Info
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Education
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Experience
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Travel
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Exam
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Language
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Property
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Guarantee
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Documents
//             </Link>
//         </li>

//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Dashboard
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Orders
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Products
//             </Link>
//         </li>
//         <li>
//             <Link to="#" class="nav-link link-body-emphasis">
//             <svg class="bi pe-none me-2" width="16" height="16"></svg>
//             Customers
//             </Link>
//         </li>
//         </ul>
//         <hr/>
//         <div className="dropdown">
//             <Link to="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                 <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
//                     <strong>mdo</strong>
//             </Link>
//             <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
//                 <li><Link className="dropdown-item" to="#">New project...</Link></li>
//                 <li><Link className="dropdown-item" to="#">Settings</Link></li>
//                 <li><Link className="dropdown-item" to="#">Profile</Link></li>
//                 <li><Link className="dropdown-divider"/></li>
//                 <li><Link className="dropdown-item" to="#">Sign out</Link></li>
//             </ul>
//         </div>
//     </div>
//     )
// }

// export default Sidebar;


// import { 
//   FiHome, 
//   FiUser,
//   FiBook,
//   FiBriefcase,
//   FiGlobe,
//   FiFileText,
//   FiShield,
//   FiFile,
//   FiPieChart,
//   FiShoppingCart,
//   FiPackage,
//   FiUsers,
//   FiMapPin,
//   FiAward,
//   FiDollarSign
// } from "react-icons/fi";
// import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>Sidebar</h2>
//       </div>
      
//       <div className="sidebar-section">
//         <div className="sidebar-item">
//           <FiHome className="sidebar-icon" />
//           <span>Home</span>
//         </div>
//       </div>
      
//       <div className="sidebar-section">
        
//         <div className="sidebar-item">
//           <FiBriefcase className="sidebar-icon" />
//           <span>Employee Info</span>
//         </div>
//         <div className="sidebar-item">
//           <FiBook className="sidebar-icon" />
//           <span>Education</span>
//         </div>
//         <div className="sidebar-item">
//           <FiBriefcase className="sidebar-icon" />
//           <span>Experience</span>
//         </div>
//         <div className="sidebar-item">
//           <FiMapPin className="sidebar-icon" />
//           <span>Travel</span>
//         </div>
//         <div className="sidebar-item">
//           <FiAward className="sidebar-icon" />
//           <span>Exam</span>
//         </div>
//         <div className="sidebar-item">
//           <FiGlobe className="sidebar-icon" />
//           <span>Language</span>
//         </div>
//         <div className="sidebar-item">
//           <FiDollarSign className="sidebar-icon" />
//           <span>Property</span>
//         </div>
//         <div className="sidebar-item">
//           <FiShield className="sidebar-icon" />
//           <span>Guarantee</span>
//         </div>
//         <div className="sidebar-item">
//           <FiFile className="sidebar-icon" />
//           <span>Documents</span>
//         </div>
//         <div className="sidebar-item">
//           <FiPieChart className="sidebar-icon" />
//           <span>Fire</span>
//         </div>
//         <div className="sidebar-item">
//           <FiShoppingCart className="sidebar-icon" />
//           <span>Health</span>
//         </div>
//         <div className="sidebar-item">
//           <FiPackage className="sidebar-icon" />
//           <span>Pulblication</span>
//         </div>
//         <div className="sidebar-item">
//           <FiUsers className="sidebar-icon" />
//           <span>Retirements</span>
//         </div>
//         <div className="sidebar-item">
//           <FiUsers className="sidebar-icon" />
//           <span>Relative</span>
//         </div>
//         <div className="sidebar-item">
//           <FiUsers className="sidebar-icon" />
//           <span> Reward </span>
//         </div>
//         <div className="sidebar-item">
//           <FiUsers className="sidebar-icon" />
//           <span> Punishment </span>
//         </div>
//         <div className="sidebar-item">
//           <FiUsers className="sidebar-icon" />
//           <span> Appraisal </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import { 
  FiHome, 
  FiUser,
  FiBook,
  FiBriefcase,
  FiGlobe,
  FiFileText,
  FiShield,
  FiFile,
  FiPieChart,
  FiShoppingCart,
  FiPackage,
  FiUsers,
  FiMapPin,
  FiAward,
  FiDollarSign
} from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Sidebar</h2>
      </div>
      
      <div className="sidebar-section">
        <div className="sidebar-item">
          <FiHome className="sidebar-icon" />
          <span>Home</span>
        </div>
      </div>
      
      <div className="sidebar-section">
        <div className="sidebar-item">
          <FiUser className="sidebar-icon" />
          <span>Employee Info</span>
        </div>
        <div className="sidebar-item">
          <FiBook className="sidebar-icon" />
          <span>Education</span>
        </div>
        <div className="sidebar-item">
          <FiBriefcase className="sidebar-icon" />
          <span>Experience</span>
        </div>
        <div className="sidebar-item">
          <FiMapPin className="sidebar-icon" />
          <span>Travel</span>
        </div>
        <div className="sidebar-item">
          <FiAward className="sidebar-icon" />
          <span>Exam</span>
        </div>
        <div className="sidebar-item">
          <FiGlobe className="sidebar-icon" />
          <span>Language</span>
        </div>
        <div className="sidebar-item">
          <FiDollarSign className="sidebar-icon" />
          <span>Property</span>
        </div>
        <div className="sidebar-item">
          <FiShield className="sidebar-icon" />
          <span>Guarantee</span>
        </div>
        <div className="sidebar-item">
          <FiFileText className="sidebar-icon" />
          <span>Documents</span>
        </div>
        <div className="sidebar-item">
          <FiPieChart className="sidebar-icon" />
          <span>Fire</span>
        </div>
        <div className="sidebar-item">
          <FiShoppingCart className="sidebar-icon" />
          <span>Health</span>
        </div>
        <div className="sidebar-item">
          <FiPackage className="sidebar-icon" />
          <span>Pulblication</span>
        </div>
        <div className="sidebar-item">
          <FiUsers className="sidebar-icon" />
          <span>Retirements</span>
        </div>
        <div className="sidebar-item">
          <FiUsers className="sidebar-icon" />
          <span>Relative</span>
        </div>
        <div className="sidebar-item">
          <FiAward className="sidebar-icon" />
          <span>Reward</span>
        </div>
        <div className="sidebar-item">
          <FiShield className="sidebar-icon" />
          <span>Punishment</span>
        </div>
        <div className="sidebar-item">
          <FiDollarSign className="sidebar-icon" />
          <span>Appraisal</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;