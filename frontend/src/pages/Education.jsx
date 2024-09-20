import React, { useState, useEffect } from 'react';
import { loadUniversity, loadFaculty, loadMajor, loadDegree } from '../functions/dataLoaders';  // Import the data loaders

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

  // UniversityComponent.js

const UniversityComponent = () => {
  const [universities, setUniversity] = useState([]);
  const [faculties, setFaculty] = useState([]);
  const [majors, setMajor] = useState([]);
  const [degrees, setDegree] = useState([]);

  useEffect(() => {
    (async () => {
      await loadUniversity(setUniversity);  // Load university data
      await loadFaculty(setFaculty);        // Load faculty data
      await loadMajor(setMajor);            // Load major data
      await loadDegree(setDegree);          // Load degree data
    })();
  }, []);

    return (
      <div className="App">
        <div className="container">
        <form >
        
            
          <div className="mb-3 row">
          <label className="col-sm-1 col-form-label"> Batch No </label>
              
            <label className="col-sm-1 col-form-label"> Major </label>
              <div class="col-sm-5">
              <select className="form-select">
                  <option value={degree}> Select Major </option>
                    {majors.map((major) => (
                    <option key={major.id} value={major.id}>
                      {major.name}
                                
                      </option> 
                   ))}
                </select>
              </div>
          </div>
        </form>
  </div>
</div>
  );
};
  export default UniversityComponent;
  