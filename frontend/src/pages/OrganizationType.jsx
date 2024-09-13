import axios from 'axios';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function OrganizationType() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [organization_types, setOrganizationType] = useState([]);
  
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/organization-type/");
      setOrganizationType(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/organization-type/",{
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

  async function editOrganizationType(organization_types){
    setName(organization_types.name);
    setId(organization_types.id);
  }

  async function DeleteOrganizationType(id){
    await axios.delete("http://127.0.0.1:8000/organization-type/"+id);
        toastr.danger("Data Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/organization-type/" + organization_types.find(u => u.id === id).id || id,{
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

  // if(degrees.length <= 0) return null;

    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
            
            <label className="form-label col-sm-2"><h2> Organization Type </h2></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={save} disabled={!name}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={update}> Update </button> </label>
            <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
            <input type="Text" className="form-control" id="organization_type_id" hidden
            value={id}
            onChange={(event)=>{setId(event.target.value); }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Organization Type </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="organization_type_name" placeholder = "Enter Organization Type"
                value={name} onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>
        </form>

      <table className="table table-striped" align="center">
          <thead>
            <tr>
              <th scope="col"> ID </th>
              <th scope="col"> Organization Type </th>
              <th scope="col"> Edit </th>
              <th scope="col"> Delete </th>
            </tr>
          </thead>
          <tbody>
            {organization_types.map((organization_type) => (
              <tr key={organization_type.id}>
                <th scope="row">{organization_type.id}</th>
                <td>{organization_type.name}</td>
                
                <td>
                  <button type="button" className="btn btn-warning" onClick={() => editOrganizationType(organization_type)}> Edit </button>
                  </td>
                  <td>
                  <button type="button" className="btn btn-danger" onClick={() => DeleteOrganizationType(organization_type.id)}> <i className="fas fa-star"></i> {/* Using a star icon as a favorite icon */} </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      
    );
  }
  
  export default OrganizationType;
  