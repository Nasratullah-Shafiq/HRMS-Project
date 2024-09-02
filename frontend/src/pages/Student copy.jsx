import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Student(){

  const[students, setStudents] = useState();
  
  useEffect(()=>{
    getData();
  },[]);
  const getData = async() =>{
    const response = await fetch('http://localhost:8000/api/students').then( (response) => response.json() );
    setStudents(response);
  };
//     axios.get('http://localhost:8000/api/students').then(res =>{
//       console.log(res);
//       setStudents(res.data.students);
      
//     });
//   },[]);
 
  
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4> Student List
                                <Link to ="/student/create" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary">Add Student </Link>
                                <Link to ="/student/store" style={ {margin: '0px 0px 0px 1000px'} } className = "btn btn-primary">Add  </Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <table className="table table-stripped">
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Course</td>
                                        <td>Email</td>
                                        <td>Phone No</td>
                                        <td>Edit</td>
                                        <td>Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    { students && students.map( (student) => {
                                        return(
                                          <tr key={student.id}>
                                            <td>{student.id}</td>
                                          <td>{student.name}</td>
                                          <td>{student.course}</td>
                                          <td>{student.email}</td>
                                          <td>{student.phone}</td> 
                                          <td><Link to="/" className = "btn btn-success">Edit </Link></td>
                                            <td><button className = "btn btn-danger">Delete </button></td>
                                          </tr>
                                        )

                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student;