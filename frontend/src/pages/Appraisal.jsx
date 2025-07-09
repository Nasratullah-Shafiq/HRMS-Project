import axios from 'axios';
import { Link } from 'react-router-dom';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import Swal from 'sweetalert2';  // Import SweetAlert2

function HR_Employee() {
  const [id, setId] = useState('');
  const [full_name, setFull_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  // const [father_name, setFater_Name] = useState('');
  // const [grand_father_name, setGrand_Father_Name] = useState('');
  // const [date_of_birth, setDate_Of_Birth] = useState('');
  // const [placce_of_birth, setPlace_Of_Birth] = useState('');
  // const [gender, setGender] = useState('');
  // const [natinality, setNationality] = useState('');
  // const [degree, setDegree] = useState('');
  // const [gederal_directorate, setGeneral_Directorate] = useState('');
  // const [directorate, setDirectorate] = useState('');
  // const [head, setHead] = useState('');
  // const [job_position, setJob_Position] = useState('');
  // const [remarks, setRemarks] = useState([]);
  // const [blood_group, setBlood_Group] = useState('');
  // const [marital_status, setMarital_Status] = useState('');
  // const [religion, setReligion] = useState('');
  const [employees, setEmployee] = useState([]);
  
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
      await axios.post("http://127.0.0.1:8000/employee/",{
        id: id,
        full_name: full_name,
        last_name: last_name
      });
    //   alert("This is not enogh");
      Swal.fire('Success!', 'Record Updated Successfully', 'success'); 
      toast.success("Course Added Successfully");
      toastr.success("Course Added Successfully");
    
      setId("");
      setFull_Name("");
      setLast_Name("");
      Load();
    }
    catch(err){
      // alert("Course Registration Failed");
      // toast.error("Record Registered failed");
      toastr.error("Course Registration Failed");
    }
  }

  async function editStudent(employees){
    setFull_Name(employees.full_name);
    setLast_Name(employees.last_name);
    setId(employees.id);
  }

  async function DeleteStudent(id){
    await axios.delete("http://127.0.0.1:8000/employee/"+id);
    // alert("Course Deleted Successfully");
    toast.error("Course Deleted Successfully");
    
    Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/employee/" + employees.find(u => u.id === id).id || id,{
        id: id,
        full_name: full_name,
        last_name: last_name
      });
      toast.success("Course Updated Successfully");
      setId("");
      setFull_Name("");
      setLast_Name("");
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
                <input type="Text" className="form-control" id="course" placeholder = "Enter Your Course"
                value={full_name}onChange={(event)=>{setFull_Name(event.target.value);}}/> 
              </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Fee </label>
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
                                <Link to ="/course/store" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary"> New </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Course</td>
                                        <td>Fee</td>
                                        <td>Edit</td>
                                        <td>Delete</td>
                                    </tr>
                                </thead>
                              <tbody>
                                {employees.map((employee) => (
                                <tr key={employee.id}>
                                  <th scope="row">{employee.id}</th>
                                  <td>{employee.full_name}</td>
                                  <td>{employee.last_name}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-warning"
                                      onClick={() => editStudent(employee)}
                                    >
                                      Edit
                                    </button>
                                    </td>
                                    <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => DeleteStudent(employee.id)}
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

  export default HR_Employee;
  