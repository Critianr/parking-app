import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Signin from './components/signin';
// import Dashboar from './dashboar';
// import ReactDOM from 'react-dom';
import Center from './components/center';


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Center />
      {/* <Signin /> */}
   
      <Footer />
    </div>
    
  );
}

export default App;
