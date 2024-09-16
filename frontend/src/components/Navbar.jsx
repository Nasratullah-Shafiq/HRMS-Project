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
        LoadProvince();
  }

  async function update(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/country/" + countrys.find(u => u.id === id).id || id,{
        id: id,
        name: name
      });
      toastr.info("Record updated Successfully");
    
      setPId("");
      setPName("");
      LoadProvince();
    }
    catch(err){
    
      toastr.error("Registration Failed");
    }
  }

  const [pid, setPId] = useState('');
  const [pname, setPName] = useState('');
  const [country_id, setCountryId] = useState('');
  const [provinces, setProvince] = useState([]);
  
  useEffect(() =>{
    (async()=>await LoadProvince())();
  }, []);

  async function LoadProvince(){
    const result = await axios.get(
      "http://127.0.0.1:8000/province/");
      setProvince(result.data);
      console.log(result.data);
  }

  async function saveProvince(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/province/",{
        pid: pid,
        pname: pname,
        country_id: country_id
      });
      toastr.success("Record Registered Successfully");
    
      setPId("");
      setPName("");
      setCountryId("");
      LoadProvince();
    }
    catch(err){
      toast.error("Registration Failed");
    }
  }

  async function editProvince(province){
    setPName(provinces.name);
    setPId(provinces.id);
  }

  async function DeleteProvince(id){
    await axios.delete("http://127.0.0.1:8000/province/"+id);
        toastr.error("Data Deleted Successfully");
        LoadProvince();
  }

  async function updateProvince(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/province/" + provinces.find(u => u.id === id).id || id,{
        pid: pid,
        pname: pname,
        country_id: country_id
      });
      toastr.info("Record updated Successfully");
    
      setPId("");
      setPName("");
      setCountryId("");
      LoadProvince();
    }
    catch(err){
    
      toastr.error("Registration Failed");
    }
  }

  const [did, setDId] = useState('');
  const [dname, setDName] = useState('');
  const [province_id, setProvinceId] = useState('');
  const [districts, setDistrict] = useState([]);
  
  useEffect(() =>{
    (async()=>await LoadDistrict())();
  }, []);

  async function LoadDistrict(){
    const result = await axios.get(
      "http://127.0.0.1:8000/district/");
      setDistrict(result.data);
      
  }

  async function saveDistrict(event){
    event.preventDefault();
    try{
      await axios.post("http://127.0.0.1:8000/district/",{
        did: did,
        dname: dname,
        province_id: province_id
      });
      toastr.success("Record Registered Successfully");
    
      setDId("");
      setDName("");
      setProvinceId("");
      LoadDistrict();
    }
    catch(err){
      toast.error("Registration Failed");
    }
  }

  async function editDistrict(district){
    setDName(districts.name);
    setDId(districts.id);
  }

  async function DeleteDistrict(id){
    await axios.delete("http://127.0.0.1:8000/district/"+id);
        toastr.error("Data Deleted Successfully");
        LoadDistrict();
  }

  async function updateDistrict(event){
    event.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/district/" + districts.find(u => u.id === id).id || id,{
        did: did,
        dname: dname,
        province_id: province_id
      });
      toastr.info("Record updated Successfully");
    
      setDId("");
      setDName("");
      setProvinceId("");
      LoadDistrict();
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
                  <li><Link className="dropdown-item" to="/province" data-bs-toggle="modal" data-bs-target="#provinceModal"> Province </Link></li>
                  <li><Link className="dropdown-item" to="" data-bs-toggle="modal" data-bs-target="#districtModal"> District </Link></li>
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
            {/* Start of Country */}
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
              {/* End of Country */}



            {/* Start of Province */}
            <div className="modal fade" id="provinceModal" tabIndex="-1" aria-labelledby="provinceModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="courseModalLabel"> Province Details </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
      
                  <div className="App">
                    <div className="container">
                    <form >
                    <div className="form-group">
                        
                        <label className="form-label col-sm-2"><h2> Province </h2></label>
                        {/* <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={saveProvince} disabled={!name}> Save </button></label> */}
                        <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={updateProvince}> Update </button> </label>
                        <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
                        <input type="Text" className="form-control" id="province_id" hidden
                        value={pid}
                        onChange={(event)=>{setPId(event.target.value); }}/>           
                      
                      </div>
                        
                      <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label"> Province </label> 
                        
                          <div className="col-sm-10">
                            <input type="Text" className="form-control" id="province_name" placeholder = "Enter Province"
                            value={pname} onChange={(event)=>{setPName(event.target.value);}}/> 
                          </div>
                      </div>

                      <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label"> Country </label> 
                        
                          <div className="col-sm-10">
                            
                          <select className="form-select" onChange={(event) => setCountryId(event.target.value)}>
                            <option value={country_id}> Select a country </option>
                            {countrys.map((country) => (
                              <option key={country.id} value={country.id}>
                                {country.name}
                                
                              </option>
                            ))}
                          </select>   
                          </div>
                      </div>
                    </form>

                  <table className="table table-striped" align="center">
                      <thead>
                        <tr>
                          <th scope="col"> ID </th>
                          <th scope="col"> Province </th>
                          <th scope="col"> Country </th>
                          <th scope="col"> Edit </th>
                          <th scope="col"> Delete </th>
                        </tr>
                      </thead>
                      <tbody>
                        {provinces.map((province) => (
                          <tr key={province.id}>
                            <th scope="row">{province.id}</th>
                            <td>{province.name}</td>
                            <td>{province.country}</td>
                            <td>
                              <button type="button" className="btn btn-warning" onClick={() => editProvince(province)}> Edit </button>
                              </td>
                              <td>
                              <button type="button" className="btn btn-danger" onClick={() => DeleteProvince(province.id)}> <i className="fas fa-star"></i> {/* Using a star icon as a favorite icon */} </button>
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
                      <button type="button" className="btn btn-primary" onClick={saveProvince} disabled={!pname}> Save changes </button>
                    </div>
                  </div>
                </div>
              </div> 
          {/* End of Province */}


          {/* Start of District */}
          <div className="modal fade" id="districtModal" tabIndex="-1" aria-labelledby="districtModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="districtModalLabel"> District Details </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
      
                  <div className="App">
                    <div className="container">
                    <form >
                    <div className="form-group">
                        
                        <label className="form-label col-sm-2"><h2> District </h2></label>
                        {/* <label className = "col-sm-1 col-form-label"> <button className="btn btn-primary" onClick={saveProvince} disabled={!name}> Save </button></label> */}
                        <label className = "col-sm-1 col-form-label"> <button className="btn btn-warning" onClick={updateDistrict}> Update </button> </label>
                        <div className = "col-sm-12" style={{paddingTop: '20px'}}> </div>
                        <input type="Text" className="form-control" id="district_id" hidden
                        value={pid}
                        onChange={(event)=>{setDId(event.target.value); }}/>           
                      
                      </div>
                        
                      <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label"> District </label> 
                        
                          <div className="col-sm-10">
                            <input type="Text" className="form-control" id="district_name" placeholder = "Enter District"
                            value={dname} onChange={(event)=>{setDName(event.target.value);}}/> 
                          </div>
                      </div>

                      <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label"> Province </label> 
                        
                          <div className="col-sm-10">
                          <select className="form-select" onChange={(event) => setProvinceId(event.target.value)}>
                            <option value={province_id}> Select a Province </option>
                            {provinces.map((province) => (
                              <option key={province.id} value={province.id}>
                                {province.name}
                                
                              </option>
                            ))}
                          </select>
                          </div>
                      </div>
                    </form>

                  <table className="table table-striped" align="center">
                      <thead>
                        <tr>
                          <th scope="col"> ID </th>
                          <th scope="col"> District </th>
                          <th scope="col"> Province </th>
                          <th scope="col"> Edit </th>
                          <th scope="col"> Delete </th>
                        </tr>
                      </thead>
                      <tbody>
                        {districts.map((district) => (
                          <tr key={district.id}>
                            <th scope="row">{district.id}</th>
                            <td>{district.name}</td>
                            <td>{district.province}</td>
                            <td>
                              <button type="button" className="btn btn-warning" onClick={() => editDistrict(district)}> Edit </button>
                              </td>
                              <td>
                              <button type="button" className="btn btn-danger" onClick={() => DeleteDistrict(district.id)}> <i className="fas fa-star"></i> {/* Using a star icon as a favorite icon */} </button>
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
                      <button type="button" className="btn btn-primary" onClick={saveDistrict} disabled={!dname}> Save </button>
                    </div>
                  </div>
                </div>
              </div> 
          {/* End of District */}
          
          </div>
        </div>
      </nav>

      
    )
}

export default Navbar;


