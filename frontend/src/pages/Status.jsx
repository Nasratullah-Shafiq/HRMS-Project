import axios from 'axios';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function Status() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [statuss, setStatus] = useState([]);
  
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/status/");
      setStatus(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/status/",{
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

  async function editStatus(statuss){
    setName(statuss.name);
    setId(statuss.id);
  }

  async function DeleteStatus(id){
    await axios.delete("http://127.0.0.1:8000/status/"+id);
        toastr.danger("Data Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/status/" + statuss.find(u => u.id === id).id || id,{
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
            
            <label className="form-label col-sm-2"><h2> Status </h2></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={save} disabled={!name}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={update}> Update </button> </label>
            <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
            <input type="Text" className="form-control" id="major_id" hidden
            value={id}
            onChange={(event)=>{setId(event.target.value); }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Status </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="status_name" placeholder = "Enter Employee's Status"
                value={name} onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>
        </form>

      <table className="table table-striped" align="center">
          <thead>
            <tr>
              <th scope="col"> ID </th>
              <th scope="col"> Status </th>
              <th scope="col"> Edit </th>
              <th scope="col"> Delete </th>
            </tr>
          </thead>
          <tbody>
            {statuss.map((status) => (
              <tr key={status.id}>
                <th scope="row">{status.id}</th>
                <td>{status.name}</td>
                
                <td>
                  <button type="button" className="btn btn-warning" onClick={() => editStatus(status)}> Edit </button>
                  </td>
                  <td>
                  <button type="button" className="btn btn-danger" onClick={() => DeleteStatus(status.id)}> <i className="fas fa-star"></i> {/* Using a star icon as a favorite icon */} </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
  
  export default Status;
  