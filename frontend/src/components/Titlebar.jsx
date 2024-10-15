import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
function Titlebar(){
  const [checkedDegrees, setCheckedDegrees] = useState([]); // Track selected degrees
  const [selectAllChecked, setSelectAllChecked] = useState(false); // Track "Select All" checkbox state  
  const [degrees, setDegrees] = useState([]);

  
  // Handle individual checkbox change
  const handleCheckboxChange = (e, degreeId) => {
    const isChecked = e.target.checked;
    setCheckedDegrees((prev) =>
      isChecked ? [...prev, degreeId] : prev.filter((id) => id !== degreeId)
    );

    setSelectAllChecked(
      degrees.length === checkedDegrees.length + (isChecked ? 1 : -1)
    );
  };

  // Handle "Select All" checkbox change
  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAllChecked(isChecked);
    setCheckedDegrees(isChecked ? degrees.map((degree) => degree.id) : []);
  };



    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="#"> <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary"> Save </button></label></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ms-2 mb-lg-0">
              
            {/* {isChecked && ( */}
             {checkedDegrees.length > 0 && (
              <label className = "col-sm-1 col-form-label"> 
                  <span className="btn btn-default" > <p> {checkedDegrees.length} selected </p> </span> 
              </label>
              )}
              {checkedDegrees.length > 0 && (
             <label className = "col-sm-1 col-form-label"> 
             <button className="btn btn-default"> <i className='fa-solid fa-print'></i> Print </button> </label>
             )}
             {/* Conditionally render the buttons based on checkbox selection */}
             {checkedDegrees.length > 0 && (
             <label className = "col-sm-1 col-form-label">
            
             <div className="dropdown">
               <button type="button" className="btn btn-default dropdown-toggle" data-bs-toggle="dropdown">
               <i className='fa-solid fa-gear'></i> Action
               </button>
               <ul className="dropdown-menu"> 
                 <li><Link to="#" className="dropdown-item"> <i className="fa-solid fa-file-export"></i> Export </Link></li>
                 <li><Link to="#" className="dropdown-item" > <i className='fa-solid fa-archive'></i> Archive </Link></li>
                 <li><Link to="#" className="dropdown-item"> <i className="fa-solid fa-inbox"></i> Unarchive </Link></li>
                 <li><Link to="#" className="dropdown-item"> <i className='fa-solid fa-copy'></i> Duplicate </Link></li>
                 <li><Link to="#" className="dropdown-item"> <i className='fa-solid fa-trash'></i> Delete </Link></li>
               </ul>
             </div>
            
             </label>
             )}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact-us"> Contact </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about-us"> About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/education"> Education </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health"> Health </Link>
              </li>
            </ul>
              
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      
    )
}

export default Titlebar;


