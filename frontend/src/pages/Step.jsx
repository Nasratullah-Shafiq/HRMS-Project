import axios from 'axios';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Step() {
  const [id, setId] = useState('');
  const [step, setStep] = useState('');
  const [steps, setSteps] = useState([]);
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/step/");
      setSteps(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/student/",{
        id: id,
        step: step
      });
      toast.success("Record Registered Successfully");
    
      setId("");
      setStep("");
      Load();
    }
    catch(err){
      // alert("Student Registration Failed");
      toast.error("Student Registration Failed");
    }
  }

  async function editStudent(students){
    setName(students.name);
    setLastName(students.last_name);
    setFatherName(students.father_name);
    setCourse(students.course);
    setAddress(students.address);
    setFee(students.fee);
    setId(students.id);
  }

  async function DeleteStudent(id){
    await axios.delete("http://127.0.0.1:8000/student/"+id);
        toast.info("Student Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/student/" + students.find(u => u.id === id).id || id,{
        id: id,
        name: name,
        last_name: last_name,
        father_name: father_name,
        course: course,
        address: address,
        fee: fee
      });
      toast.info("Record updated Successfully");
    
      setId("");
      setStep("");
      Load();
    }
    catch(err){
    
      toast.error("Student Registration Failed");
    }
  }

  if(students.length <= 0) return null;

    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
            <label className="form-label"><h1>Student Management System in Django React API </h1></label>
            <input type="Text" className="form-control" id="student_id" hidden
            value={id}
            onChange={(event)=>{
              setId(event.target.value);
            }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">First Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_first_name" placeholder = "Enter First Name"
                value={name}onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_last_name" placeholder = "Enter Last Name"
                value={last_name}onChange={(event)=>{setLastName(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Father Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_father_name" placeholder = "Enter Father Name"
                value={father_name}onChange={(event)=>{setFatherName(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Course</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_course" placeholder = "Enter Course"
                value={course}onChange={(event)=>{setCourse(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Student Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_fee" placeholder = "Enter Fee"
                value={fee}onChange={(event)=>{setFee(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Address</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_address" placeholder = "Enter Address"
                value={address}onChange={(event)=>{setAddress(event.target.value);}}/> 
              </div>
          </div>

          <button className="btn btn-primary" onClick={save}>Register</button>
          <button className="btn btn-warning" onClick={update}>Update</button>
        </form>

      <table className="table table-striped" align="center">

  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Father Name</th>
      <th scope="col">Course</th>
      <th scope="col">Address</th>
      <th scope="col">Student Fee</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {steps.map((step) => (
      <tr key={student.id}>
        <th scope="row">{step.id}</th>
        <td>{step.name}</td>
        <td>{student.last_name}</td>
        <td>{student.father_name}</td>
        <td>{student.course}</td>
        <td>{student.address}</td>
        <td>{student.fee}</td>
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => editStep(step)}
          >
            Edit
          </button>
          </td>
          <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => DeleteStep(step.id)}
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

      
    );
  }
  
  export default Step;
  