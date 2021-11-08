import React from 'react';

const Header = () =>{
    return(
      <header className="header">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
  <div class="container-fluid">

  <ul class="navbar-nav"> 
    <li class="nav-item">
      {/* <a class="nav-link fas fa-address-card" href="#">Hola</a> */}
    </li>
    <li class="nav-item">
      {/* <a class="nav-link far fa-address-book" href="#">Hola</a> */}
    </li>
    <li class="nav-item">
      <a class="nav-link far fa-bell" href="#">imagen</a>
    </li>
  </ul>
  
  <router-link to="/home" class="navbar-brand mx-auto" href="#">
  {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" /> */}
    CONTROL PARKING
  </router-link>
       <ul class="nav navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
        </ul>
  </div>
</nav>
</header>
    );
}

export default Header;