import axios from 'axios';
import { Link } from 'react-router-dom';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import Swal from 'sweetalert2';  // Import SweetAlert2

function HR_District() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  
  const [districts, setDistrict] = useState([]);
  
  useEffect(() =>{
    (async()=>await Load())();
  }, []);


  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/employee/");
      setEmployee(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/district/",{
        id: id,
        name: name
      });
    
      toastr.success("District Added Successfully");
    
      setId("");
      setName("");
      Load();
    }
    catch(err){
      toastr.error("District Registration Failed");
    }
  }

  async function editDistrict(districts){
    setName(districts.name);
    setId(districts.id);
  }

  async function DeleteStudent(id){
    await axios.delete("http://127.0.0.1:8000/district/"+id);
    
    toast.error("Course Deleted Successfully");
    
    Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/district/" + districts.find(u => u.id === id).id || id,{
        id: id,
        name: name
      });
      toast.success("Course Updated Successfully");
      setId("");
      setName("");
      Load();
    }
    catch(err){
        toast.error("Course Registration Failed");
    }
  }

  // if(employees.length <= 0) return null;

    return (
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
         
            <input type="Text" className="form-control" id="Employee_id" hidden
            value={id}
            onChange={(event)=>{
              setId(event.target.value);
            }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Course </label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="district" placeholder = "District Your Course"
                value={name}onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> District </label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="fee" placeholder = "Enter Your fee"
                value={last_name}onChange={(event)=>{setLast_Name(event.target.value);}}/> 
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
                            <h4> Employee
                                {/* <Link to ="/student/create" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary">Add Student </Link> */}
                                <Link to ="/" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary"> New </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <td> ID</td>
                                        <td> District </td>
                                        <td> Edit</td>
                                        <td> Delete</td>
                                    </tr>
                                </thead>
                              <tbody>
                                {districtss.map((district) => (
                                <tr key={district.id}>
                                  <th scope="row">{district.id}</th>
                                  <td>{district.name}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-warning"
                                      onClick={() => editDistrict(district)}
                                    >
                                      Edit
                                    </button>
                                    </td>
                                    <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => DeleteDistrict(district.id)}
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

  export default HR_District;
  