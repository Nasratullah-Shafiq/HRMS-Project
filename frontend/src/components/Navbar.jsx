
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
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="courseModalLabel">Country Details</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {/* Modal content goes here */}
                  <p>This is where the course details will go.</p>
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


