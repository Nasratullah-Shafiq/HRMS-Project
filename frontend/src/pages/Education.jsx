import React, { useState, useEffect } from 'react';
import { loadUniversity, loadFaculty, loadMajor, loadDegree } from './src/functions/dataLoaders';  // Import the data loaders
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
// import Swal from 'sweetalert2';  // Import SweetAlert2
  // UniversityComponent.js



// function Education() {
  // const [id, setId] = useState('');
  // const [country, setCountryId] = useState('');
  // const [degree, setDegreeId] = useState('');
  // const [university, setUniversityId] = useState('');
  // const [faculty, setFacultyId] = useState('');
  // const [major, setMajorId] = useState('');
  // const [education_start_date, setStartDate] = useState('');
  // const [education_end_date, setEndDate] = useState('');
  // const [batch_no, setBatchNo] = useState('');
  // const [education_remarks, setRemarks] = useState('');
  // const [educations, setEducation] = useState([]);


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
  // const [countrys, setCountry] = useState([]);
  
  // useEffect(() =>{
  //   (async()=>await LoadCountry())();
  // }, []);

  // async function LoadCountry(){
  //   const result = await axios.get(
  //     "http://127.0.0.1:8000/country/");
  //     setCountry(result.data);
  // }

  // const [universitys, setUniversity] = useState([]);
  
  // useEffect(() =>{
  //   (async()=>await LoadUniversity())();
  // }, []);

  // async function LoadUniversity(){
  //   const result = await axios.get("http://127.0.0.1:8000/university/");
  //     setUniversity(result.data);
  // }

  // const [facultys, setFaculty] = useState([]);
  
  // useEffect(() =>{
  //   (async()=>await LoadFaculty())();
  // }, []);

  // async function LoadFaculty(){
  //   const result = await axios.get("http://127.0.0.1:8000/faculty/");
  //     setFaculty(result.data);
  // }

  // const [majors, setMajor] = useState([]);
  
  // useEffect(() =>{
  //   (async()=>await LoadMajor())();
  // }, []);

  // async function LoadMajor(){
  //   const result = await axios.get("http://127.0.0.1:8000/major/");
  //     setMajor(result.data);
  // }


  // const [degrees, setDegree] = useState([]);
  
  // useEffect(() =>{
  //   (async()=>await LoadDegree())();
  // }, []);

  // async function LoadDegree(){
  //   const result = await axios.get("http://127.0.0.1:8000/degree/");
  //     setDegree(result.data);
  // }


  // useEffect(() =>{
  //   (async()=>await Load())();
  // }, []);

  // async function Load(){
  //   const result = await axios.get("http://127.0.0.1:8000/education/");
  //     setEducation(result.data);
  //     console.log(result.data);
  // }

  // async function save(event){
  //   event.preventDefault();
  //   try{
  //     await axios.post("http://127.0.0.1:8000/education/",{
  //       id: id,
  //       country: country, 
  //       degree: degree, 
  //       university: university, 
  //       faculty: faculty, 
  //       major: major, 
  //       education_start_date: education_start_date, 
  //       education_end_date: education_end_date, 
  //       batch_no: batch_no, 
  //       education_remarks: education_remarks
  //     });
    
    
  //     toastr.success("Date Added Successfully");
    
  //     setId("");
  //     setStartDate("");
  //     setEndDate("");
  //     setBatchNo("");
  //     setRemarks("");
  //     Load();
  //   }
  //   catch(err){
  //     toastr.error("Course Registration Failed");
  //   }
  // }

  // async function editEducation(educations){
    
  //   setStartDate(educations.education_start_date);
  //   setEndDate(educations.education_end_date);
  //   setBatchNo(educations.batch_no);
  //   setRemarks(educations.education_remarks);
  //   setId(educations.id);
  // }

  // async function DeleteEducation(id){
  //   await axios.delete("http://127.0.0.1:8000/education/"+id);
    
  //   toast.error("Course Deleted Successfully");
    
  //   Load();
  // }

  // async function update(event){
  //   event.preventDefault();
  //   try{
  //     await axios.put("http://127.0.0.1:8000/education/" + educations.find(u => u.id === id).id || id,{
  //       id: id,
  //       country: country, 
  //       degree: degree, 
  //       university: university, 
  //       faculty: faculty, 
  //       major: major, 
  //       education_start_date: education_start_date, 
  //       education_end_date: education_end_date, 
  //       batch_no: batch_no, 
  //       education_remarks: education_remarks      
  //     });
  //     toast.success("Data Updated Successfully");
  //     setId("");
  //     setCountryId("");
  //     // setDegree("");
  //     setUniversityId("");
  //     setFacultyId("");
  //     // setMajor("");
  //     setStartDate("");
  //     setEndDate("");
  //     setBatchNo("");
  //     setRemarks("");
  //     Load();
  //   }
  //   catch(err){
  //       toast.error("Data Registration Failed");
  //   }
  // }

    return (
      <div className="App">
        <div className="container">
        <form >
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
                <select className="form-select" onChange={(event) => setCountryId(event.target.value)}>
                  <option value={country}> Select a country </option>
                    {countrys.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="country" placeholder = "Seletct Country" */}
                {/* value={country}onChange={(event)=>{setCountry(event.target.value);}}/>  */}
              </div>
              <label className="col-sm-1 col-form-label"> University </label>
              <div class="col-sm-5">
              <select className="form-select" onChange={(event) => setUniversityId(event.target.value)}>
                  <option value={university}> Select a University </option>
                    {universitys.map((university) => (
                    <option key={university.id} value={university.id}>
                      {university.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="university" placeholder = "Enter Your University" */}
                {/* value={university}onChange={(event)=>{setUniversity(event.target.value);}}/>  */}
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label"> Start Date </label>
              <div class="col-sm-5">
                <input type="Text" className="form-control" id="start_date" placeholder = "Enter Your Start Date"
                value={education_start_date}onChange={(event)=>{setStartDate(event.target.value);}}/> 
              </div>
              <label className="col-sm-1 col-form-label"> Faculty </label>
              <div class="col-sm-5">
              <select className="form-select" onChange={(event) => setFacultyId(event.target.value)}>
                  <option value={faculty}> Select a Faculty </option>
                    {facultys.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="faculty" placeholder = "Enter Your Faculty" */}
                {/* value={faculty}onChange={(event)=>{setFaculty(event.target.value);}}/>  */}
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
              <select className="form-select" onChange={(event) => setDegreeId(event.target.value)}>
                  <option value={faculty}> Select Degree </option>
                    {degrees.map((degree) => (
                    <option key={degree.id} value={degree.id}>
                      {degree.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="Degree" placeholder = "Enter Your Degree" */}
                {/* value={degree}onChange={(event)=>{setDegreeId(event.target.value);}}/>  */}
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
              <select className="form-select" onChange={(event) => setMajorId(event.target.value)}>
                  <option value={faculty}> Select Major </option>
                    {majors.map((major) => (
                    <option key={major.id} value={major.id}>
                      {major.name}
                                
                      </option>
                   ))}
                </select>
                {/* <input type="Text" className="form-control" id="major" placeholder = "Enter Your Major" */}
                {/* value={major}onChange={(event)=>{setMajor(event.target.value);}}/>  */}
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-1 col-form-label"> Remarks </label>
              <div class="col-sm-11">
                <input type="Text" className="form-control" id="remark" placeholder = "Enter Your Remarks"
                value={education_remarks}onChange={(event)=>{setRemarks(event.target.value);}}/> 
              </div>
          </div>
          <button className="btn btn-primary" onClick={save}>Register</button>
          <button className="btn btn-warning" onClick={update}>Update</button>
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
                                      onClick={() => editEducation(education)}
                                    >
                                      Edit
                                    </button>
                                    </td>
                                    <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => DeleteEducation(education.id)}
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
  }

  export default UniversityComponent;
  