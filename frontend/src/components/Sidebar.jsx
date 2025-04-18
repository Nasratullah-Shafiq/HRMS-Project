
import React from 'react';
// import { Link } from 'react-router-dom';
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
//           <FiUser className="sidebar-icon" />
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
//           <FiFileText className="sidebar-icon" />
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
//           <FiAward className="sidebar-icon" />
//           <span>Reward</span>
//         </div>
//         <div className="sidebar-item">
//           <FiShield className="sidebar-icon" />
//           <span>Punishment</span>
//         </div>
//         <div className="sidebar-item">
//           <FiDollarSign className="sidebar-icon" />
//           <span>Appraisal</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import { Link } from "react-router-dom";

// function Sidebar(){
//   return(
//   <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: '280px'}}>
//       <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
//       <svg class="bi pe-none me-2" width="40" height="32"></svg>
//       <span class="fs-4"> HRMIS System </span>
//       </Link>
//       <hr/>

//       <ul className="nav nav-pills flex-column mb-auto">
//         {/* Employee Info - Active Item */}
//         <li className="nav-item">
//           <Link to="#" className="nav-link active" aria-current="page">
//             <i className="bi bi-person-vcard me-2"></i>
//             Employee Info
//           </Link>
//         </li>

//         {/* Education */}
//         <li>
//           <Link to="/education" className="nav-link link-dark">
//             <i className="bi bi-journal-bookmark me-2"></i>
//             Education
//           </Link>
          
//         </li>

//         {/* Experience */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-briefcase me-2"></i>
//             Experience
//           </Link>
//         </li>

//         {/* Travel */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-geo-alt me-2"></i>
//             Travel
//           </Link>
//         </li>

//         {/* Exam */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-clipboard-check me-2"></i>
//             Exam
//           </Link>
//         </li>

//         {/* Language */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-translate me-2"></i>
//             Language
//           </Link>
//         </li>

//         {/* Property */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-house me-2"></i>
//             Property
//           </Link>
//         </li>

//         {/* Guarantee */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-shield-check me-2"></i>
//             Guarantee
//           </Link>
//         </li>

//         {/* Documents */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-folder me-2"></i>
//             Documents
//           </Link>
//         </li>

//         {/* Fire */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-fire me-2"></i>
//             Fire
//           </Link>
//         </li>

//         {/* Health */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-heart-pulse me-2"></i>
//             Health
//           </Link>
//         </li>

//         {/* Publication */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-journal-text me-2"></i>
//             Publication
//           </Link>
//         </li>

//         {/* Retirements */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-person-walking me-2"></i>
//             Retirements
//           </Link>
//         </li>

//         {/* Relative */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-people me-2"></i>
//             Relative
//           </Link>
//         </li>

//         {/* Reward */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-award me-2"></i>
//             Reward
//           </Link>
//         </li>

//         {/* Punishment */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-hand-thumbs-down me-2"></i>
//             Punishment
//           </Link>
//         </li>

//         {/* Appraisal */}
//         <li>
//           <Link to="#" className="nav-link link-dark">
//             <i className="bi bi-graph-up me-2"></i>
//             Appraisal
//           </Link>
//         </li>
//       </ul>
//       <hr/>
//       <div className="dropdown">
//           <Link to="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//               <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
//                   <strong>mdo</strong>
//           </Link>
//           <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
//               <li><Link className="dropdown-item" to="#">New project...</Link></li>
//               <li><Link className="dropdown-item" to="#">Settings</Link></li>
//               <li><Link className="dropdown-item" to="#">Profile</Link></li>
//               <li><Link className="dropdown-divider"/></li>
//               <li><Link className="dropdown-item" to="#">Sign out</Link></li>
//           </ul>
//       </div>
//   </div>
//   )
// }

// export default Sidebar;



import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Employee Info");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const isActive = (itemName) => {
    return activeItem === itemName ? "active" : "";
  };

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {/* Employee Info */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link ${isActive("Employee Info")}`}
          onClick={() => handleItemClick("Employee Info")}
          aria-current={isActive("Employee Info") ? "page" : undefined}
        >
          <i className="bi bi-person-vcard me-2"></i>
          Employee Info
        </Link>
      </li>

      {/* Education */}
      <li className="nav-item">
        <Link 
          to="/education" 
          className={`nav-link link-dark ${isActive("Education")}`}
          onClick={() => handleItemClick("Education")}
        >
          <i className="bi bi-journal-bookmark me-2"></i>
          Education
        </Link>
      </li>

      {/* Experience */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Experience")}`}
          onClick={() => handleItemClick("Experience")}
        >
          <i className="bi bi-briefcase me-2"></i>
          Experience
        </Link>
      </li>

      {/* Travel */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Travel")}`}
          onClick={() => handleItemClick("Travel")}
        >
          <i className="bi bi-geo-alt me-2"></i>
          Travel
        </Link>
      </li>

      {/* Exam */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Exam")}`}
          onClick={() => handleItemClick("Exam")}
        >
          <i className="bi bi-clipboard-check me-2"></i>
          Exam
        </Link>
      </li>

      {/* Language */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Language")}`}
          onClick={() => handleItemClick("Language")}
        >
          <i className="bi bi-translate me-2"></i>
          Language
        </Link>
      </li>

      {/* Property */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Property")}`}
          onClick={() => handleItemClick("Property")}
        >
          <i className="bi bi-house me-2"></i>
          Property
        </Link>
      </li>

      {/* Guarantee */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Guarantee")}`}
          onClick={() => handleItemClick("Guarantee")}
        >
          <i className="bi bi-shield-check me-2"></i>
          Guarantee
        </Link>
      </li>

      {/* Documents */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Documents")}`}
          onClick={() => handleItemClick("Documents")}
        >
          <i className="bi bi-folder me-2"></i>
          Documents
        </Link>
      </li>

      {/* Fire */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Fire")}`}
          onClick={() => handleItemClick("Fire")}
        >
          <i className="bi bi-fire me-2"></i>
          Fire
        </Link>
      </li>

      {/* Health */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Health")}`}
          onClick={() => handleItemClick("Health")}
        >
          <i className="bi bi-heart-pulse me-2"></i>
          Health
        </Link>
      </li>

      {/* Publication */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Publication")}`}
          onClick={() => handleItemClick("Publication")}
        >
          <i className="bi bi-journal-text me-2"></i>
          Publication
        </Link>
      </li>

      {/* Retirements */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Retirements")}`}
          onClick={() => handleItemClick("Retirements")}
        >
          <i className="bi bi-person-walking me-2"></i>
          Retirements
        </Link>
      </li>

      {/* Relative */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Relative")}`}
          onClick={() => handleItemClick("Relative")}
        >
          <i className="bi bi-people me-2"></i>
          Relative
        </Link>
      </li>

      {/* Reward */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Reward")}`}
          onClick={() => handleItemClick("Reward")}
        >
          <i className="bi bi-award me-2"></i>
          Reward
        </Link>
      </li>

      {/* Punishment */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Punishment")}`}
          onClick={() => handleItemClick("Punishment")}
        >
          <i className="bi bi-hand-thumbs-down me-2"></i>
          Punishment
        </Link>
      </li>

      {/* Appraisal */}
      <li className="nav-item">
        <Link 
          to="#" 
          className={`nav-link link-dark ${isActive("Appraisal")}`}
          onClick={() => handleItemClick("Appraisal")}
        >
          <i className="bi bi-graph-up me-2"></i>
          Appraisal
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;