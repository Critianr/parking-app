import React, {Fragment} from 'react';
import '../assets/css/index.css'
import Dashboar from "../components/Dashboar";
import PanelMain from '../components/PanelMain';
import Header from '../components/header';
import Footer from '../components/footer'
import {Router, Route} from 'react-router';

// import{ Router} from 'react-router-dom'


export default function index()  {
        return (
            <>
            <Header />
            {/* <div className="container"> */}
            {/* <div className="container-fluid"> */}
            <div class="row g-0">
            <div class="col-10 centro">
            <PanelMain />
         </div>
         <div class="col-2">
             
             <Dashboar />
         {/* <PanelTickets /> */}
         
         </div>
         </div>
         {/* </div> */}
         {/* </div> */}
         <Footer />
         </>

        )
}

