import { React, useEffect, useState, Link, axios, toast, toastr, ToastContainer, jsPDF, XLSX } from '../components/import'; // Adjust path as needed

import { loadEducation, saveEducation, loadUniversity, loadFaculty, loadMajor, loadDegree, loadCountry } from '../functions/dataLoaders';  // Import the data loaders

const UniversityComponent = () => {

    const [id, setId] = useState("");
    const [education_start_date, setStartDate] = useState("");
    const [education_end_date, setEndDate] = useState("");
    const [batch_no, setBatchNo] = useState("");
    const [education_remarks, setRemarks] = useState("");
    const [checkedEducations, setCheckedEducations] = useState([]);
    
    const [education, setEducation] = useState([]);
    const [universitys, setUniversity] = useState([]);
    const [facultys, setFaculty] = useState([]);
    const [majors, setMajor] = useState([]);
    const [degrees, setDegree] = useState([]);
    const [countrys, setCountry] = useState([]); 
    const [loading, setLoading] = useState(true);  // Added loading state
    const [selectAllChecked, setSelectAllChecked] = useState(false); // Track "Select All" checkbox state
  
    // Function to load updated data (example)
    const Load = () => {
      console.log("Load data after save...");
    };
  
    const handleSave = async (event) => {
      event.preventDefault();
  
      const educationData = {
        id,
        countrys,
        degrees,
        universitys,
        facultys,
        majors,
        education_start_date,
        education_end_date,
        batch_no,
        education_remarks
      };
  
      const stateSetters = {
        setId,
        setCountry,
        setUniversity,
        setFaculty,
        setStartDate,
        setEndDate,
        setBatchNo,
        setRemarks,
        loadFunction: Load
      };
  
      // Call the saveEducation function
      await saveEducation(educationData, stateSetters);
    };

  useEffect(() => {
    const loadData = async () => {
      try {
        await loadEducation(setEducation);  //Load Education Data
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
    setCheckedEducations([]);
  }, []);

  // Handle individual checkbox change
  const handleCheckboxChange = (e, educationId) => {
    const isChecked = e.target.checked;
    setCheckedEducations((prev) =>
      isChecked ? [...prev, educationId] : prev.filter((id) => id !== educationId)
    );

    setSelectAllChecked(
      education.length === checkedEducations.length + (isChecked ? 1 : -1)
    );
  };

  // Handle "Select All" checkbox change
  const handleSelectAllChange = (e) => {
    const isChecked = e.target.checked;
    setSelectAllChecked(isChecked);
    setCheckedEducations(isChecked ? education.map((education) => education.id) : []);
  };

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
            <label className = "col-sm-1 col-form-label"> <button type="sbmit" className="btn btn-primary" disabled={!countrys}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning"> Update </button> </label>
            <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
            <input type="Text" className="form-control" id="university_id" hidden
            value={id}
            // onChange={(event)=>{setCountry(event.target.value); }}/>
            />           
           
          </div>
          <div className="form-group">
         
         <input type="Text" className="form-control" id="Education_id" hidden
         value={id}
         onChange={(event)=>{
           setId(event.target.value);
         }}/>           
        
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
         <label className="col-sm-1 col-form-label"> Start Date </label>
           <div class="col-sm-5">
             {/* <input type="Text" className="form-control" id="start_date" placeholder = "Enter Your Start Date"
             value={education_start_date}onChange={(event)=>{setStartDate(event.target.value);}}/>  */}
             {/* <input type="date-local" id="appointment" 
       name="appointment" 
       /> */}
       <label for="appointment">Select Date and Time:</label>
       <input type="datetime-local" id="appointment" name="appointment"/>
           </div>
           <label className="col-sm-1 col-form-label"> Faculty </label>
           <div class="col-sm-5">
           <select className="form-select" onChange={(event) => setFaculty(event.target.value)}>
               <option value={facultys}> Select a Faculty </option>
                 {facultys.map((faculty) => (
                 <option key={faculty.id} value={faculty.id}>
                   {faculty.name}
                             
                   </option>
                ))}
             </select>
     
           </div>
       </div>

       <div className="mb-3 row">
       <label className="col-sm-1 col-form-label"> End Date </label>
           <div class="col-sm-5">
             <input type="Text" className="form-control" id="end_date" placeholder = "Enter Your End Date"
             value={education_end_date}onChange={(event)=>{setEndDate(event.target.value);}}/> 
           </div>
           <label className="col-sm-1 col-form-label"> Degree </label>
           <div class="col-sm-5">
           <select className="form-select" onChange={(event) => setDegree(event.target.value)}>
               <option value={degrees}> Select Degree </option>
                 {degrees.map((degree) => (
                 <option key={degree.id} value={degree.id}>
                   {degree.name}
                             
                   </option>
                ))}
             </select>
           </div>
       </div>

       <div className="mb-3 row">
       <label className="col-sm-1 col-form-label"> Batch No </label>
           <div class="col-sm-5">
             <input type="Text" className="form-control" id="bacth_no" placeholder = "Enter Your Batch No"
             value={batch_no}onChange={(event)=>{setBatchNo(event.target.value);}}/> 
           </div>
         <label className="col-sm-1 col-form-label"> Major </label>
           <div class="col-sm-5">
           <select className="form-select" onChange={(event) => setMajor(event.target.value)}>
               <option value={majors}> Select Major </option>
                 {majors.map((major) => (
                 <option key={major.id} value={major.id}>
                   {major.name}
                             
                   </option>
                ))}
             </select>
           </div>
       </div>

       <div className="mb-3 row">
         <label className="col-sm-1 col-form-label"> Remarks </label>
           <div class="col-sm-11">
             <input type="Text" className="form-control" id="remark" placeholder = "Enter Your Remarks"
             value={education_remarks}onChange={(event)=>{setRemarks(event.target.value);}}/> 
           </div>
       </div>
    
          </form>
          <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    {/* <div className='card'> */}
                        <div className='card-header'>
                            <h4> Education
                                {/* <Link to ="/student/create" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary">Add Student </Link> */}
                                <Link to ="/course/store" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary"> New </Link>
                            </h4>
                        </div>
                          <table className="table table-striped table-hover" align="center">
                          <thead>
                            <tr>
                              <th style={{ width: '20px' }}>
                                <input
                                  type="checkbox"
                                  id="select-all"
                                  onChange={handleSelectAllChange}
                                  checked={selectAllChecked}
                                />
                              </th>
                              <th> Country </th>
                              <th> Start Date </th>
                              <th> End Date </th>
                              <th> Batch No </th>
                              <th> Remarks </th>
                              <th> University </th>
                              <th> Degree </th>
                              <th> Major </th>
                              <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                          {degrees
                          .filter((education) => !education.isArchived) // Show only non-archived degrees
                            .map((education) => (
                            
                              <tr key={education.id}>
                                <td>
                                  <input
                                    type="checkbox"
                                    checked={checkedEducations.includes(education.id)}
                                    onChange={(e) => handleCheckboxChange(e, education.id)}
                                  />
                                </td>
                                <td>{education.name}</td>
                                <td>{education.startDate}</td>
                                <td>{education.endDate}</td>
                                <td>{education.batchNo}</td>
                                <td>{education.university}</td>
                                <td>{education.degree}</td>
                                <td>{education.major}</td>

                                <td style={{ textAlign: 'right', padding: '10px' }}>
                                  <i
                                    className="fa-regular fa-pen-to-square"
                                    // onClick={() => editEducation(education)}
                                  ></i>
                                  <i
                                    className="fa-solid fa-trash"
                                    style={{ paddingLeft: '15px' }}
                                    // onClick={() => DeleteEducation(education.id)}
                                  ></i>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                       
                    </div>
                {/* </div> */}
            </div>
        </div>
      
        </div>
    </div>
  );
};

export default UniversityComponent;
