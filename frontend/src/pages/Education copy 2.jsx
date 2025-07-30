import { React, useEffect, useState, Link, axios, toast, toastr, ToastContainer, jsPDF, XLSX } from '../components/import'; // Adjust path as needed

import { loadEducation, saveEducation, loadUniversity, loadFaculty, loadMajor, loadDegree, loadCountry } from '../functions/dataLoaders';  // Import the data loaders

const UniversityComponent = () => {

    const [id, setId] = useState("");
    const [education_start_date, setStartDate] = useState("");
    const [education_end_date, setEndDate] = useState("");
    const [batch_no, setBatchNo] = useState("");
    const [education_remarks, setRemarks] = useState("");
    
    const [educations, setEducation] = useState([]);
    const [universitys, setUniversity] = useState([]);
    const [facultys, setFaculty] = useState([]);
    const [majors, setMajor] = useState([]);
    const [degrees, setDegree] = useState([]);
    const [countrys, setCountry] = useState([]); 
    const [loading, setLoading] = useState(true);  // Added loading state
  
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
                    <div className='card'>
                        <div className='card-header'>
                            <h4> Education
                                {/* <Link to ="/student/create" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary">Add Student </Link> */}
                                <Link to ="/course/store" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary"> New </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                         
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <td> ID </td>
                                        <td> Country </td>
                                        <td> Degree </td>
                                        <td> University </td>
                                        <td> Faculty </td>
                                        <td> Major </td>
                                        <td> Start Date </td>
                                        <td> End Date </td>
                                        <td> Batch No </td>
                                        <td> Remarks </td>
                                    </tr>
                                </thead>
                              <tbody>
                                {educations.map((education) => (
                                <tr key={education.id}>
                                  <th scope="row">{education.id}</th>
                                  <td>{education.country}</td>
                                  <td>{education.degree}</td>
                                  <td>{education.faculty}</td>
                                  <td>{education.university}</td>
                                  <td>{education.major}</td>
                                  <td>{education.education_start_date}</td>
                                  <td>{education.education_end_date}</td>
                                  <td>{education.batch_no}</td>
                                  <td>{education.education_remarks}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-warning"
                                      // onClick={() => editEducation(education)}
                                    >
                                      Edit
                                    </button>
                                    </td>
                                    <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      // onClick={() => DeleteEducation(education.id)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))}
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        </div>
    </div>
  );
};

export default UniversityComponent;
