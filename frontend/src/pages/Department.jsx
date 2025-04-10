import axios from 'axios';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function Department() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [departments, setDepartment] = useState([]);
  
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/department/");
      setDepartment(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/department/",{
        id: id,
        name: name
      });
      toastr.success("Record Registered Successfully");
    
      setId("");
      setName("");
      Load();
    }
    catch(err){
      toast.error("Registration Failed");
    }
  }

  async function editDepartment(departments){
    setName(departments.name);
    setId(departments.id);
  }

  async function DeleteDepartment(id){
    await axios.delete("http://127.0.0.1:8000/department/"+id);
        toastr.danger("Data Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/department/" + departments.find(u => u.id === id).id || id,{
        id: id,
        name: name
      });
      toastr.info("Record updated Successfully");
    
      setId("");
      setName("");
      Load();
    }
    catch(err){
    
      toastr.error("Registration Failed");
    }
  }
    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
            
            <label className="form-label col-sm-2"><h2> Department </h2></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={save} disabled={!name}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={update}> Update </button> </label>
            <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
            <input type="Text" className="form-control" id="department_id" hidden
            value={id}
            onChange={(event)=>{setId(event.target.value); }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Department </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="department_name" placeholder = "Enter Department"
                value={name} onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>
        </form>

      <table className="table table-striped" align="center">
          <thead>
            <tr>
              <th scope="col"> ID </th>
              <th scope="col"> Department </th>
              <th scope="col"> Edit </th>
              <th scope="col"> Delete </th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <th scope="row">{department.id}</th>
                <td>{department.name}</td>
                
                <td>
                  <button type="button" className="btn btn-warning" onClick={() => editDepartment(department)}> Edit </button>
                  </td>
                  <td>
                  <button type="button" className="btn btn-danger" onClick={() => DeleteDepartment(department.id)}> <i className="fas fa-star"></i> {/* Using a star icon as a favorite icon */} </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      
    );
  }
  
  export default Department;
  