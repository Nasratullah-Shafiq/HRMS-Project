import axios from 'axios';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Degree() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [degrees, setDegree] = useState([]);
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/degree/");
      setGrade(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/degree/",{
        id: id,
        name: name
      });
      toast.success("Record Registered Successfully");
    
      setId("");
      setName("");
      Load();
    }
    catch(err){
      // alert("Student Registration Failed");
      toast.error("Student Registration Failed");
    }
  }

  async function editDegree(degrees){
    setName(degrees.name);
    setId(degrees.id);
  }

  async function DeleteDegree(id){
    await axios.delete("http://127.0.0.1:8000/degree/"+id);
        toast.info("Data Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/degree/" + degrees.find(u => u.id === id).id || id,{
        id: id,
        name: name
      });
      toast.info("Record updated Successfully");
    
      setId("");
      setName("");
      Load();
    }
    catch(err){
    
      toast.error("Student Registration Failed");
    }
  }

  if(degrees.length <= 0) return null;

    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
            <label className="form-label"><h1>Student Management System in Django React API </h1></label>
            <input type="Text" className="form-control" id="degree_id" hidden
            value={id}
            onChange={(event)=>{
              setId(event.target.value);
            }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Employee Grade </label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="degree_name" placeholder = "Enter Employee's Degree"
                value={name}onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>

          <button className="btn btn-primary" onClick={save}>Register</button>
          <button className="btn btn-warning" onClick={update}>Update</button>
        </form>

      <table className="table table-striped" align="center">

  <thead>
    <tr>
      <th scope="col"> ID </th>
      <th scope="col"> Degree </th>
      <th scope="col"> Edit </th>
      <th scope="col"> Delete </th>
    </tr>
  </thead>
  <tbody>
    {degrees.map((degree) => (
      <tr key={degree.id}>
        <th scope="row">{grade.id}</th>
        <td>{degree.name}</td>
        
        <td>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => editDegree(degree)}
          >
            Edit
          </button>
          </td>
          <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => DeleteDegree(degree.id)}
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
  
  export default Degree;
  