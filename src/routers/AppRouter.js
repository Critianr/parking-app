import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from '../components/Signin';
import Entrada from '../pages/Entrada';
import Header from '../components/header';
import SearchVechiculos from '../pages/SearchVehiculos'
export default function AppRouter() {
    return (
        
        <Router>
            
            <Switch>
            {/* <Fragment>  */}
            <Route exact path="/" component={Signin} />
            {/* <Header /> */}
            <Route exact path="/index" component={Entrada} />
            <Route exact path="/busqueda" component={SearchVechiculos} />
            <Route path='*'> </Route>
            {/* </Fragment> */}
            </Switch>
        </Router>
        
        )
}

