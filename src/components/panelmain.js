import React, {Component, Fragment} from "react";
import '../assets/css/PanelMain.css'
import axios from "axios";
import authHelper from '../helpers/auth.helper';
import { Navigate } from "react-router-dom";
import { format } from 'date-fns'

export default class PanelMain extends Component{
  state={
    data:[],

  };

  // const placa = useRef();
  // const puesto = useRef();
  // const tipoVehiculo = useRef();

  infoVehiculo = async (e) =>{
    // e.preventDefault();
    const dataVehiculo={
      placa: this.state.placa,
      Puesto: this.state.Puesto,
      TipoVehiculo: this.state.TipoVehiculo,
      // tiempoInicio: format(this.state.tiempoInicio, 'do MMMM Y')
    }
   await axios.post('https://app58.herokuapp.com/api/nuevoticket', dataVehiculo);
   console.log(dataVehiculo)
  }
  onInputChange = (e) =>{
    // onInputChange reive un evento
      this.setState({
        [e.target.name]: e.target.value
    })
  }
render(){
    return (
      authHelper.getToken() ?
        <Fragment>
        <div className="container formulario">
        <form onSubmit={this.infoVehiculo} className="">
       
      <h2 className="">Ingrese la informacion del vehiculo</h2>
    <div className="input-group mb-3">
  <label htmlFor="placa" className="input-group-text" id="inputGroup-sizing-default">Ingrese placa</label>
  <input ref="placa" type="text" name="placa" className="form-control" onChange={this.onInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</div>
<div className="input-group mb-3">
  <label htmlFor="puesto" className="input-group-text" id="inputGroup-sizing-default">Ingrese puesto</label>
  <input  type="text" ref="puesto" name="Puesto" onChange={this.onInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
  
</div>

  <div className="input-group mb-3">
  <label htmlFor="vehiculo" className="input-group-text" >Seleccione tipo de vehiculo</label>
  <select className="form-select" ref="TipoVehiculo" name="TipoVehiculo"onChange={this.onInputChange} id="inputGroupSelect01">
    {/* <!-- <select className="form-select" v-model="tipoVehiculo" id="inputGroupSelect01"> --> */}
    <option >Seleccione</option>
    <option value="Motocicleta">Motocicleta</option>
    <option value="Carro">Carro</option>
    <option value="Camionetas">Camionetas</option>
    <option value="Camion">Camion</option>
    <option value="Vans">Vans</option>
  </select>

  </div>
  <div className="input-group mb-3">
  {/* <!-- <span className="input-group-text" id="inputGroup-sizing-default" >{{ticketDato.tiempoI}}</span> -->
  <!-- <input v-model="ticketDato.tInicio" /> --> */}
</div>
  <button type="submit" className="btn btn-success" >Ingresar</button>
</form> 
 </div>
 </Fragment>
        :
        <Navigate to={'/'} />
    )
  }
}
