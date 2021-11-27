import React, {Fragment} from 'react';
import { Routes, Route, } from 'react-router-dom';
import Signin from '../components/Signin';
import Entrada from '../pages/Entrada';
import Header from '../components/header';
import SearchVechiculos from '../pages/SearchVehiculos';

export default function AppRouter() {
    return (
        
        <Routes>
            
            {/* <Switch> */}
            {/* <Fragment>  */}

            <Route  path={"/"} element={<Signin />} />
            {/* <Header /> */}
            <Route  path={"/index"} element={<Entrada />}  />
            <Route  path={"/busqueda"} element={<SearchVechiculos />} />
            <Route path={'*'}> </Route>
            {/* </Fragment> */}
            {/* </Switch> */}
        </Routes>
        
        )
}

