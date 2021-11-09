import React from "react";
// import ReactDOM from 'react-dom';

import "../src/assets/css/dashboar.css";
// const style={width: 230px; height:100%};
const Dashboar = () =>{
    
    return(
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "330px", height:"500px"}}>
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg class="bi me-2" width="40" height="32">
          
          </svg>
        <span class="fs-4">Panel</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link text-white" aria-current="page">
            <svg class="bi me-2" width="16" height="16">

            </svg>
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/Tickets" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16">
              </svg>
            Gestion de Ticket
          </router-link>
        </li>
        <li>
          <router-link to="/Panel_Parqueo" class="nav-link text-white">
            <svg class="bi me-2" width="16" height="16">
              </svg>
            Panel de tickets
          </router-link>
        </li>
      </ul>
      <hr />
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://randomuser.me/api/portraits/thumb/women/10.jpg" alt="" width="32" height="32" class="rounded-circle me-2" />
          <strong>Admin</strong>
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
    

    );
}

export default Dashboar;