
import React from 'react';
import { Link } from 'react-router-dom';
function Sidebar(){
    return(
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: '280px'}}>
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi pe-none me-2" width="40" height="32"></svg>
        <span class="fs-4">Sidebar</span>
        </Link>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
            <Link to="#" class="nav-link active" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Home
            </Link>
        </li>
        <li>
            <Link to="#" class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Dashboard
            </Link>
        </li>
        <li>
            <Link to="#" class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Orders
            </Link>
        </li>
        <li>
            <Link to="#" class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Products
            </Link>
        </li>
        <li>
            <Link to="#" class="nav-link link-body-emphasis">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Customers
            </Link>
        </li>
        </ul>
        <hr/>
        <div className="dropdown">
            <Link to="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                    <strong>mdo</strong>
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><Link className="dropdown-item" to="#">New project...</Link></li>
                <li><Link className="dropdown-item" to="#">Settings</Link></li>
                <li><Link className="dropdown-item" to="#">Profile</Link></li>
                <li><Link className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Sign out</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Sidebar;