import axios from 'axios';
import { Link } from 'react-router-dom';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import Swal from 'sweetalert2';  // Import SweetAlert2

function Course() {
  const [id, setId] = useState('');
  const [course, setCourse] = useState('');
  const [fee, setFee] = useState('');
  const [courses, setUsers] = useState([]);  
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/course/");
      setUsers(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/course/",{
        id: id,
        course: course,
        fee: fee
      });
      // alert("This is not enogh");
      // Swal.fire('Success!', 'Record Updated Successfully', 'success'); 
      // toast.success("Course Added Successfully");
      toastr.success("Course Added Successfully");
    
      setId("");
      setCourse("");
      setFee("");
      Load();
    }
    catch(err){
      // alert("Course Registration Failed");
      // toast.error("Record Registered failed");
      toastr.error("Course Registration Failed");
    }
  }

  async function editStudent(courses){
    setCourse(courses.course);
    setFee(courses.fee);
    setId(courses.id);
  }

  async function DeleteStudent(id){
    await axios.delete("http://127.0.0.1:8000/course/"+id);
    // alert("Course Deleted Successfully");
    toast.error("Course Deleted Successfully");
    
    Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/course/" + courses.find(u => u.id === id).id || id,{
        id: id,
        course: course
      });
      toastr.success("Course Added Successfully");
      // alert("Course Updated Successfully");
      setId("");
      setCourse("");
    
      Load();
    }
    catch(err){
      alert("Course Registration Failed");
    }
  }

  if(courses.length <= 0) return null;

    return (
      <div className="App">
        <div className="container">
        <form >
          <div className="form-group">
            <label className="form-label"><h1> </h1></label>
            <input type="Text" className="form-control" id="student_id" hidden
            value={id}
            onChange={(event)=>{
              setId(event.target.value);
            }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Course </label>
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="course" placeholder = "Enter Your Course"
                value={course}onChange={(event)=>{setCourse(event.target.value);}}/> 
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
                            <h4> Courses
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
                                        <td>Edit</td>
                                        <td>Delete</td>
                                    </tr>
                                </thead>
                              <tbody>
                                {courses.map((course) => (
                                <tr key={course.id}>
                                  <th scope="row">{course.id}</th>
                                  <td>{course.course}</td>
                                  
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-warning"
                                      onClick={() => editStudent(course)}
                                    >
                                      Edit
                                    </button>
                                    </td>
                                    <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => DeleteStudent(course.id)}
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

  export default Course;
  