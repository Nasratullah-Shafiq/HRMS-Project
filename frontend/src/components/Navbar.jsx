
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
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
          <Link className="nav-link active" aria-current="page" to="/students"> Student </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/course"> Course </Link>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar;


