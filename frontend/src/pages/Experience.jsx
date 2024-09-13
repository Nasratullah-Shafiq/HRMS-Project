import axios from 'axios';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function Experience() {
  const [id, setId] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [organization, setOrganization] = useState('');
  const [grade, setGrade] = useState('');
  const [step_id, setStepId] = useState('');
  const [department, setDepartment] = useState('');
  const [job_position, setJobPosition] = useState('');
  const [organization_type, setOrganizationType] = useState('');
  const [job_start_date, setJobStartDate] = useState('');
  const [job_end_date, setJobEndDate] = useState('');
  const [status_id, setStatusId] = useState('');
  const [remark, setRemark] = useState('');
  const [experiences, setExperience] = useState([]);
  
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/experience/");
      setExperience(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/experience/",{
        id: id,
        country: country,
        province: province,
        organization: organization,
        organization_type: organization_type,
        department: department,
        job_position: job_position,
        grade: grade,
        step_id: step_id,
        job_start_date: job_start_date,
        job_end_date: job_end_date,
        status_id: status_id,
        remark: remark
        
      });
      toastr.success("Record Registered Successfully");
    
      setId("");
      setCountry("");
      setProvince("");
      setOrganization("");
      setOrganizationType("");
      setDepartment("");
      setJobPosition("");
      setGrade("");
      setStepId("");
      setJobStartDate("");
      setJobEndDate("");
      setStatusId("");
      setRemark("");
      Load();
    }
    catch(err){
      toast.error("Registration Failed");
    }
  }

  async function editExperience(experiences){
    setCountry(experiences.country);
    setProvince(experiences.province);
    setOrganization(experiences.organization);
    setOrganizationType(experiences.organization_type);
    setDepartment(experiences.department);
    setJobPosition(experiences.job_position);
    setGrade(experiences.grade);
    setStepId(experiences.step_id);
    setJobStartDate(experiences.job_start_date);
    setJobEndDate(experiences.job_end_date);
    setStatusId(experiences.status_id);
    setRemark(experiences.remark);
    setId(experiences.id);
  }

  async function DeleteExperience(id){
    await axios.delete("http://127.0.0.1:8000/experience/"+id);
        toastr.danger("Data Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/experience/" + experiences.find(u => u.id === id).id || id,{
        id: id,
        country: country,
        province: province,
        organization: organization,
        organization_type: organization_type,
        department: department,
        job_position: job_position,
        grade: grade,
        step_id: step_id,
        job_start_date: job_start_date,
        job_end_date: job_end_date,
        status_id: status_id,
        remark: remark
      });
      toastr.info("Record updated Successfully");
    
      setId("");
      setCountry("");
      setProvince("");
      setOrganization("");
      setOrganizationType("");
      setDepartment("");
      setJobPosition("");
      setGrade("");
      setStepId("");
      setJobStartDate("");
      setJobEndDate("");
      setStatusId("");
      setRemark("");

      Load();
    }
    catch(err){
    
      toastr.error("Registration Failed");
    }
  }

  // if(degrees.length <= 0) return null;

    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
            
            <label className="form-label col-sm-2"><h2> Experience </h2></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={save} disabled={!country}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={update}> Update </button> </label>
            <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
            <input type="Text" className="form-control" id="experience_id" hidden
            value={id}onChange={(event)=>{setId(event.target.value); }}/>           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Country </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="country_name" placeholder = "Enter Country"
                value={country} onChange={(event)=>{setCountry(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Province </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="province_name" placeholder = "Enter Province"
                value={province} onChange={(event)=>{setProvince(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Organization </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="organization_name" placeholder = "Enter Organization"
                value={organization} onChange={(event)=>{setOrganization(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Organization Type </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="organization_type" placeholder = "Enter Organization Type"
                value={organization_type} onChange={(event)=>{setOrganizationType(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Department </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="department_name" placeholder = "Enter Department"
                value={department} onChange={(event)=>{setDepartment(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Job Position </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="job_position_name" placeholder = "Enter Job Position"
                value={job_position} onChange={(event)=>{setJobPosition(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Grade </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="grade_name" placeholder = "Enter Grade"
                value={grade} onChange={(event)=>{setGrade(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Step </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="step_name" placeholder = "Enter Step"
                value={step_id} onChange={(event)=>{setStepId(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Start Date </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="start_date" placeholder = "Enter Start Date"
                value={job_start_date} onChange={(event)=>{setJobStartDate(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> End Date </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="end_date" placeholder = "Enter End Date"
                value={job_end_date} onChange={(event)=>{setJobEndDate(event.target.value);}}/> 
              </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Status </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="status_name" placeholder = "Enter Status"
                value={status_id} onChange={(event)=>{setStatusId(event.target.value);}}/> 
              </div>
          </div>
        </form>

      <table className="table table-striped" align="center">
          <thead>
            <tr>
              <th scope="col"> ID </th>
              <th scope="col"> Country </th>
              <th scope="col"> Province </th>
              <th scope="col"> Organization </th>
              <th scope="col"> Organization Type </th>
              <th scope="col"> Department </th>
              <th scope="col"> job position </th>
              <th scope="col"> Grade </th>
              <th scope="col"> Step </th>
              <th scope="col"> Start Date </th>
              <th scope="col"> End Date </th>
              <th scope="col"> Status </th>
              <th scope="col"> Edit </th>
              <th scope="col"> Delete </th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((experience) => (
              <tr key={experience.id}>
                <th scope="row">{experience.id}</th>
                <td>{experience.country}</td>
                <td>{experience.province}</td>
                <td>{experience.organization}</td>
                <td>{experience.organization_type}</td>
                <td>{experience.department}</td>
                <td>{experience.job_position}</td>
                <td>{experience.grade}</td>
                <td>{experience.step_id}</td>
                <td>{experience.job_start_date}</td>
                <td>{experience.job_end_date}</td>
                <td>{experience.status_id}</td>  
                <td>
                  <button type="button" className="btn btn-warning" onClick={() => editExperience(experience)}> Edit </button>
                  </td>
                  <td>
                  <button type="button" className="btn btn-danger" onClick={() => DeleteExperience(experience.id)}> <i className="fas fa-star"></i> {/* Using a star icon as a favorite icon */} </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      
    );
  }
  
  export default Experience;
  