import axios from 'axios';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Health() {
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const [report, setReport] = useState('');
  const [remark, setRemark] = useState('');
  const [healths, setUsers] = useState([]);
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/health/");
      setUsers(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/health/",{
        id: id,
        status: status,
        remark: remark,
        report: report
      });
      toast.success("Record Registered Successfully");
    
      setId("");
      setStatus("");
      setRemark("");
      setReport("");
      Load();
    }
    catch(err){
      toast.error("Health Data Registration Failed");
    }
  }

  async function editStudent(healths){
    setStatus(healths.status);
    setRemark(healths.remark);
    setReport(healths.report);
    setId(healths.id);
  }

  async function DeleteStudent(id){
    await axios.delete("http://127.0.0.1:8000/health/"+id);
        toast.info("Health Data Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/health/" + healths.find(u => u.id === id).id || id,{
        id: id,
        status: status,
        report: report,
        remark: remark,
        
      });
      toast.info("Record updated Successfully");
    
      setId("");
      setStatus("");
      setRemark("");
      setReport("");
      Load();
    }
    catch(err){
    
      toast.error("Health Data Registration Failed");
    }
  }

  if(healths.length <= 0) return null;

    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
            <label className="form-label"><h4>Employee Health Information </h4></label>
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
                value={status}onChange={(event)=>{setStatus(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_last_name" placeholder = "Enter Last Name"
                value={report}onChange={(event)=>{setReport(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Father Name</label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="student_father_name" placeholder = "Enter Father Name"
                value={remark}onChange={(event)=>{setRemark(event.target.value);}}/> 
              </div>
          </div>
          <button className="btn btn-primary" onClick={save}>Register</button>
          <button className="btn btn-warning" onClick={update}>Update</button>
        </form>

      <table className="table table-striped" align="center">

  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Status</th>
      <th scope="col">Report</th>
      <th scope="col">Remark</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {healths.map((health) => (
      <tr key={health.id}>
        <th scope="row">{health.id}</th>
        <td>{health.status}</td>
        <td>{health.report}</td>
        <td>{health.remark}</td>
        
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => editStudent(health)}
          >
            Edit
          </button>
          </td>
          <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => DeleteStudent(health.id)}
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
  
  export default Health;
  