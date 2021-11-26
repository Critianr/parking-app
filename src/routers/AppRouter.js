import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from '../components/Signin';
import Entrada from '../pages/Entrada';
import Header from '../components/header';
import SearchVechiculos from '../pages/SearchVehiculos';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns/build/date-fns-utils';
import DateFnsUtils from '@date-io/date-fns/';
import esLocale from 'date-fns/locale/es'
export default function AppRouter() {
    return (
        
        <Router>
            
            {/* <Switch> */}
            {/* <Fragment>  */}
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}> 
            <Route exact path="/" component={Signin} />
            {/* <Header /> */}
            <Route exact path="/index" component={Entrada} />
            <Route exact path="/busqueda" component={SearchVechiculos} />
            <Route path='*'> </Route>
            </MuiPickersUtilsProvider> 
            {/* </Fragment> */}
            {/* </Switch> */}
        </Router>
        
        )
}

