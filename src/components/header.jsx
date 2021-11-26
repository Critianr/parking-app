import React from 'react';
import '../assets/css/header.css'
const Header = () =>{
    return(
      <header className="header">
    <nav className="navbar navbar-expand">
  <div className="container-fluid">

  <ul className="navbar-nav"> 
    <li class="nav-item">
      {/* <a class="nav-link fas fa-address-card" href="#">Hola</a> */}
    </li>
    <li className="nav-item">
      {/* <a class="nav-link far fa-address-book" href="#">Hola</a> */}
    </li>
    <li className="nav-item">
      {/* <a class="nav-link fas fa-address-book text-black " href="#"> */}
        <i className="fas fa-address-book text-black"></i>
        {/* </a> */}
    </li>
  </ul>
  
  <router-link to="/home" className="navbar-brand mx-auto" href="#">
  {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" /> */}
    CONTROL PARKING
  </router-link>
       <ul className="nav navbar-nav ml-auto " >
            <li className="nav-item">
                <a className="nav-link text-black" href="#">About</a>
            </li>
        </ul>
  </div>
</nav>
</header>
    );
}

export default Header;