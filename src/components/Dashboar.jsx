import React from "react";
import '../assets/css/dashboar.css';
import {Link, NavLink} from 'react-router-dom';
// const style={"width: 4.5rem;"}
const Dashboar = () =>{
    return(
    //   <div class="d-flex flex-column flex-shrink-0 bg-light" >
    //   <a href="/" class="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
    //     <svg class="bi" width="40" height="32"><use href="#bootstrap"/></svg>
    //     <span class="visually-hidden">Icon-only</span>
    //   </a>
    //   <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
    //     <li class="nav-item">
    //       <a href="#" class="nav-link active py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
    //         <svg class="bi" width="24" height="24" role="img" aria-label="Home"><use href="#home"/></svg>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" class="nav-link py-3 border-bottom" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
    //         <svg class="bi" width="24" height="24" role="img" aria-label="Dashboard"><use href="#speedometer2"/></svg>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" class="nav-link py-3 border-bottom" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
    //         <svg class="bi" width="24" height="24" role="img" aria-label="Orders"><use href="#table"/></svg>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" class="nav-link py-3 border-bottom" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
    //         <svg class="bi" width="24" height="24" role="img" aria-label="Products"><use href="#grid"/></svg>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" class="nav-link py-3 border-bottom" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
    //         <svg class="bi" width="24" height="24" role="img" aria-label="Customers"><use href="#people-circle"/></svg>
    //       </a>
    //     </li>
    //   </ul>
    //   <div class="dropdown border-top">
    //     <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
    //       <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle" />
    //     </a>
    //     <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
    //       <li><a class="dropdown-item" href="#">New project...</a></li>
    //       <li><a class="dropdown-item" href="#">Settings</a></li>
    //       <li><a class="dropdown-item" href="#">Profile</a></li>
    //       <li><hr class="dropdown-divider" /></li>
    //       <li><a class="dropdown-item" href="#">Sign out</a></li>
    //     </ul>
    //   </div>
    // </div>
  
      // --------------------------------------------------
  <div class="d-flex flex-column flex-shrink-0  text-white bg-dark dashboar" >
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
      <span class="fs-4 title-panel">Sidebar</span>
    </a>
    <hr /> 
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" activeClassName="active">
        <NavLink to="/index" activeClassName="active" class="nav-link" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use href="#home"/></svg>
          Home
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink exact to="/index" activeClassName="active" class="nav-link ">
          <svg class="bi me-2" width="16" height="16"><use href="#speedometer2"/></svg>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/busqueda" activeClassName="active"class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use href="#table"/></svg>
          Orders
        </NavLink>
      </li>
      <li>
        <NavLink to="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use href="#grid"/></svg>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use href="#people-circle"/></svg>
          Customers
        </NavLink>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div> 
      // .......................................................
    //  <div className="dashboard">
    //   <h1 className="text-center">Panel</h1>
    //   <ul>
    //        <li>
    //         <NavLink exact to="/index" activeClass="active">panel</NavLink>
    //       </li>
    //       <li>
    //       <NavLink exact to="/header" activeClass="active">panel</NavLink>

    //       </li>
    //       <li>
    //         panel
    //       </li>
    //       <li>
    //         panel
    //       </li>
    //      </ul>
    //   </div> 

    );
}

export default Dashboar;