// import React, { useState, useEffect } from 'react';
// import { loadUniversity, loadFaculty, loadMajor, loadDegree } from '../functions/dataLoaders';  // Import the data loaders
// 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import toastr from 'toastr';
// import 'toastr/build/toastr.min.css';

  // UniversityComponent.js

// const UniversityComponent = () => {
//   const [universities, setUniversity] = useState([]);
//   const [faculties, setFaculty] = useState([]);
//   const [majors, setMajor] = useState([]);
//   const [degrees, setDegree] = useState([]);

//   useEffect(() => {
//     (async () => {
//       await loadUniversity(setUniversity);  // Load university data
//       await loadFaculty(setFaculty);        // Load faculty data
//       await loadMajor(setMajor);            // Load major data
//       await loadDegree(setDegree);          // Load degree data
//     })();
//   }, []);

//     return (
//       <div className="App">
//         <div className="container">
//         <form >
        
            
//           <div className="mb-3 row">
//           <label className="col-sm-1 col-form-label"> Batch No </label>
              
//             <label className="col-sm-1 col-form-label"> Major </label>
//               <div class="col-sm-5">
//               <select className="form-select">
//                   <option value={major}> Select Major </option>
//                     {majors.map((major) => (
//                     <option key={major.id} value={major.id}>
//                       {major.name}
                                
//                       </option> 
//                    ))}
//                 </select>
//               </div>
//           </div>
//         </form>
//   </div>
// </div>
//   );
// };
//   export default UniversityComponent;
import React, { useState, useEffect } from 'react';
import { saveEducation, loadUniversity, loadFaculty, loadMajor, loadDegree, loadCountry } from '../functions/dataLoaders';  // Import the data loaders

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const UniversityComponent = () => {
  // const [id, setId] = useState('');
  // const [country, setCountryId] = useState('');
  // const [university, setUniversityId] = useState('');
  // const Education = () => {
    const [id, setId] = useState("");
    const [country, setCountryId] = useState("");
    const [degree, setDegree] = useState("");
    const [university, setUniversityId] = useState("");
    const [faculty, setFacultyId] = useState("");
    const [major, setMajor] = useState("");
    const [education_start_date, setStartDate] = useState("");
    const [education_end_date, setEndDate] = useState("");
    const [batch_no, setBatchNo] = useState("");
    const [education_remarks, setRemarks] = useState("");
  
    // Function to load updated data (example)
    const Load = () => {
      console.log("Load data after save...");
    };
  
    const handleSave = async (event) => {
      event.preventDefault();
  
      const educationData = {
        id,
        country,
        degree,
        university,
        faculty,
        major,
        education_start_date,
        education_end_date,
        batch_no,
        education_remarks
      };
  
      const stateSetters = {
        setId,
        setCountryId,
        setUniversityId,
        setFacultyId,
        setStartDate,
        setEndDate,
        setBatchNo,
        setRemarks,
        loadFunction: Load
      };
  
      // Call the saveEducation function
      await saveEducation(educationData, stateSetters);
    };
  
    return (
      <form onSubmit={handleSave}>
         {/* Your form elements here */}
         <button type="submit">Save</button>
       </form>
     );
  
  
  const [universitys, setUniversity] = useState([]);
  const [faculties, setFaculty] = useState([]);
  // const [majors, setMajor] = useState([]);
  // const [degrees, setDegree] = useState([]);
  const [countrys, setCountry] = useState([]); 
  const [loading, setLoading] = useState(true);  // Added loading state

  useEffect(() => {
    const loadData = async () => {
      try {
        await loadUniversity(setUniversity);  // Load university data
        await loadFaculty(setFaculty);        // Load faculty data
        await loadMajor(setMajor);            // Load major data
        await loadDegree(setDegree);
        await loadCountry(setCountry);          // Load degree data
      } catch (error) {
        toast.error("Error loading data");
      } finally {
        setLoading(false);  // Set loading to false after data is loaded
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div className="container">
        <ToastContainer /> {/* Toast notification container */}
          <form onSubmit={handleSave}>
          <div className="form-group">
            
            <label className="form-label col-sm-2"><h2> Country </h2></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" disabled={!countrys}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning"> Update </button> </label>
            <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
            <input type="Text" className="form-control" id="university_id" hidden
            value={id}
            // onChange={(event)=>{setCountry(event.target.value); }}/>
            />           
           
          </div>
          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label"> Country </label>
              <div class="col-sm-5">
                <select className="form-select" onChange={(event) => setCountry(event.target.value)}>
                  <option value={countrys}> Select a country </option>
                    {countrys.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                                
                      </option>
                   ))}
                </select>
              </div>
              <label className="col-sm-1 col-form-label"> University </label>
              <div class="col-sm-5">
              <select className="form-select" onChange={(event) => setUniversity(event.target.value)}>
                  <option value={universitys}> Select a University </option>
                    {universitys.map((university) => (
                    <option key={university.id} value={university.id}>
                      {university.name}
                                
                      </option>
                   ))}
                </select>
              </div>
          </div>
          
            <div className="mb-3 row">
              <label className="col-sm-1 col-form-label"> Country </label>
                <div class="col-sm-5">
                {/* onChange={(event) => setCountryId(event.target.value)}> */}
                  <select className="form-select">
                    <option value={countrys}> Select a country </option>
                      {countrys.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                                  
                        </option>
                    ))}
                  </select>
                </div>  
              <label className="col-sm-1 col-form-label">Major</label>
              <div className="col-sm-5">
                <select className="form-select">
                  <option value="">Select Major</option> {/* Fixed placeholder */}
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
