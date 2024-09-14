import axios from 'axios';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function Faculty() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [organizations, setOrganization] = useState([]);
  
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/organization/");
      setOrganization(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/organization/",{
        id: id,
        name: name
      });
      toastr.success("Record Registered Successfully");
      setId("");
      setName("");
      Load();
    }
    catch(err){
      toast.error("Faculty Registration Failed");
    }
  }

  async function editOrganization(organizations){
    setName(organizations.name);
    setId(organizations.id);
  }

  async function DeleteOrganization(id){
    await axios.delete("http://127.0.0.1:8000/organization/"+id);
        toastr.error("Data Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/organization/" + organizations.find(u => u.id === id).id || id,{
        id: id,
        name: name
      });
      toastr.success("Record updated Successfully");
    
      setId("");
      setName("");
      Load();
    }
    catch(err){
    
      toast.error("Faculty Registration Failed");
    }
  }
    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
            
            <label className="form-label col-sm-2"><h2> Organization </h2></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={save} disabled={!name}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={update}> Update </button> </label>
            <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
            <input type="Text" className="form-control" id="organization_id" hidden
            value={id}
            onChange={(event)=>{setId(event.target.value); }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Organization </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="organization_name" placeholder = "Enter Organization"
                value={name} onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>
        </form>

      <table className="table table-striped" align="center">

  <thead>
    <tr>
      <th scope="col"> ID </th>
      <th scope="col"> Organizaiton </th>
      <th scope="col"> Edit </th>
      <th scope="col"> Delete </th>
    </tr>
  </thead>
  <tbody>
    {organizations.map((organization) => (
      <tr key={organization.id}>
        <th scope="row">{organization.id}</th>
        <td>{organization.name}</td>
        
        <td>
          <button type="button" className="btn btn-warning" onClick={() => editOrganization(organization)}> Edit </button>
          </td>
          <td>
          <button type="button" className="btn btn-danger" onClick={() => DeleteOrganization(organization.id)}> <i className="fas fa-star"></i> {/* Using a star icon as a favorite icon */} </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
      </div>

      
    );
  }
  
  export default Faculty;
  