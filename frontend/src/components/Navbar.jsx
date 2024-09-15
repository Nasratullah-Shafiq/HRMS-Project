import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
function Navbar(){
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [countrys, setCountry] = useState([]);
  
  useEffect(() =>{
    (async()=>await Load())();
  }, []);

  async function Load(){
    const result = await axios.get(
      "http://127.0.0.1:8000/country/");
      setCountry(result.data);
      console.log(result.data);
  }

  async function save(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/country/",{
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

  async function editCountry(country){
    setName(countrys.name);
    setId(countrys.id);
  }

  async function DeleteCountry(id){
    await axios.delete("http://127.0.0.1:8000/country/"+id);
        toastr.error("Data Deleted Successfully");
        Load();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/country/" + countrys.find(u => u.id === id).id || id,{
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
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <Link className="navbar-brand" to="#">React</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ms-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact-us"> Contact </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about-us"> About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/employee"> Employees </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health"> Health </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/students"> Student </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/course"> Course </Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Configuration
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/country" data-bs-toggle="modal" data-bs-target="#countryModal"> Country </Link></li>
                  <li><Link className="dropdown-item" to="/province"> Province </Link></li>
                  <li><Link className="dropdown-item" to="/district"> District </Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><h3 class="dropdown-header"> Education </h3></li>
                  <li><Link className="dropdown-item" to="/university"> University </Link></li>
                  <li><Link className="dropdown-item" to="/faculty"> Faculty </Link></li>
                  <li><Link className="dropdown-item" to="/degree"> Degree </Link></li>
                  <li><Link className="dropdown-item" to="/major"> Major </Link></li>
                  <li><hr className="dropdown-divider" /> </li>
                  <li><h4 class="dropdown-header"> Experience </h4></li>
                  <li><Link className="dropdown-item" to="/organization-type"> Organization Type </Link></li>
                  <li><Link className="dropdown-item" to="/Organization"> Organization </Link></li>
                  <li><Link className="dropdown-item" to="/department"> Department </Link></li>
                  <li><Link className="dropdown-item" to="/job-position"> Job Postion </Link></li>
                  <li><Link className="dropdown-item" to="/grade"> Grade </Link> </li>
                  <li><Link className="dropdown-item" to="/step"> Step </Link></li>
                  <li><Link className="dropdown-item" to="/status"> Status </Link></li>
                </ul>
              </li>
            </ul>
              
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="modal fade" id="countryModal" tabIndex="-1" aria-labelledby="courseModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="courseModalLabel">Country Details</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
    
      <div className="App">
        <div className="container">
        <form >
        <div className="form-group">
            
            <label className="form-label col-sm-2"><h2> Country </h2></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={save} disabled={!name}> Save </button></label>
            <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={update}> Update </button> </label>
            <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
            <input type="Text" className="form-control" id="country_id" hidden
            value={id}
            onChange={(event)=>{setId(event.target.value); }}/>           
           
          </div>
            
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label"> Country </label> 
            
              <div class="col-sm-10">
                <input type="Text" className="form-control" id="country_name" placeholder = "Enter Country"
                value={name} onChange={(event)=>{setName(event.target.value);}}/> 
              </div>
          </div>
        </form>

      <table className="table table-striped" align="center">
          <thead>
            <tr>
              <th scope="col"> ID </th>
              <th scope="col"> Country </th>
              <th scope="col"> Edit </th>
              <th scope="col"> Delete </th>
            </tr>
          </thead>
          <tbody>
            {countrys.map((country) => (
              <tr key={country.id}>
                <th scope="row">{country.id}</th>
                <td>{country.name}</td>
                
                <td>
                  <button type="button" className="btn btn-warning" onClick={() => editCountry(country)}> Edit </button>
                  </td>
                  <td>
                  <button type="button" className="btn btn-danger" onClick={() => DeleteCountry(country.id)}> <i className="fas fa-star"></i> {/* Using a star icon as a favorite icon */} </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      
    
  
            </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </nav>

      
    )
}

export default Navbar;


