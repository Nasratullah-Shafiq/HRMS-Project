import axios from 'axios';
import { Link } from 'react-router-dom';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function University() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [universitys, setUniversity] = useState([]);
  
  
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/university/");
      setUniversity(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/university/",{
        id: id,
        name: name
      });
      toastr.success("Record Registered Successfully");
    
      setId("");
      setName("");
      Load();
    }
    catch(err){
      toast.error("Student Registration Failed");
    }
  }

  async function editUniversity(universitys){
    setName(universitys.name);
    setId(universitys.id);
  }

  async function DeleteUniversity(id){
    await axios.delete("http://127.0.0.1:8000/university/"+id);
        toastr.error("Data Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/university/" + universitys.find(u => u.id === id).id || id,{
        id: id,
        name: name
      });
      toastr.info("Record updated Successfully");
    
      setId("");
      setName("");
      Load();
    }
    catch(err){
    
      toast.error("University Registration Failed");
    }
  }

  // if(degrees.length <= 0) return null;

    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
            <label className="form-label col-sm-2"><h2> University </h2></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={save} disabled={!name}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={update} disabled={!name}> Update </button> </label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-default"> <i className='fa-solid fa-print'></i> Print </button> </label>
            <label className = "col-sm-1 col-form-label">
            <div class="dropdown">
              <button type="button" class="btn btn-default dropdown-toggle" data-bs-toggle="dropdown">
              <i className='fa-solid fa-gear'></i> Action
              </button>
              <ul class="dropdown-menu"> 
                <li><Link to="#" class="dropdown-item"> <i className="fa-solid fa-file-export"></i> Export </Link></li>
                <li><Link to="#" class="dropdown-item"> <i className='fa-solid fa-archive'></i> Archive </Link></li>
                <li><Link to="#" class="dropdown-item"> <i className="fa-solid fa-inbox"></i> Unarchive </Link></li>
                <li><Link to="#" class="dropdown-item"> <i className='fa-solid fa-copy'></i> Duplicate </Link></li>
                <li><Link to="#" class="dropdown-item"> <i className='fa-solid fa-trash'></i> Delete </Link></li>
              </ul>
            </div>
            </label>
            <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
            <input type="Text" className="form-control" id="university_id" hidden
            value={id} 
            onChange={(event)=>{setId(event.target.value); }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> University </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="university_name" placeholder = "Enter Employee's University"
                value={name} onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>
        </form>

      <table className="table table-stripped table-hover" align="center">

  <thead>
    <tr>
      <th scope="col"> <input type="checkbox" id="javascript"></input> </th>
      <th scope="col"> University </th>
      <th scope="col"> Action </th>
    </tr>
  </thead>
  <tbody>
    {universitys.map((university) => (
      <tr key={university.id}>
        {/* <th scope="row">{university.id}</th> */}
        <td><input type="checkbox" id="javascript"/> </td>
        <td>{university.name}</td>
        
        <td>
           <i className='fa-solid fa-pen-to-square' onClick={() => editUniversity(university)}></i> 
          <i class="fa-solid fa-trash" onClick={() => DeleteUniversity(university.id)}></i> {/* Using a star icon as a favorite icon */} 
        </td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
      </div>

      
    );
  }
  
  export default University;
  