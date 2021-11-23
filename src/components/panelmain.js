import React, {Component, useRef} from "react";
import '../assets/css/PanelMain.css'
import axios from "axios";

export default class PanelMain extends Component{
  state={
    data:[],
    infoVech: '',
    // dataVehiculo:{
      placa: '',
      Puesto: '',
      TipoVehiculo:''
      // }
  };

  // const placa = useRef();
  // const puesto = useRef();
  // const tipoVehiculo = useRef();

  infoVehiculo = async (e) =>{
    e.preventDefault();
    const dataVehiculo={
      placa: this.state.placa,
      Puesto: this.state.Puesto,
      TipoVehiculo: this.state.TipoVehiculo,
    }
   await axios.post(process.env.REACT_APP_API_URL+ '/nuevoticket', dataVehiculo);
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
        <div className="container formulario">
        <form onSubmit={this.infoVehiculo} class="">
       
      <h2 class="">Ingrese la informacion del vehiculo</h2>
    <div class="input-group mb-3">
  <label htmlFor="placa" class="input-group-text" id="inputGroup-sizing-default">Ingrese placa</label>
  <input ref="placa" type="text" name="placa" class="form-control" onChange={this.onInputChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
  {/* <!-- <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="placa"> --> */}
</div>
<div class="input-group mb-3">
  <label htmlFor="puesto" class="input-group-text" id="inputGroup-sizing-default">Ingrese puesto</label>
  <input  type="text" ref="puesto" name="Puesto" onChange={this.onInputChange} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
  
</div>

  <div class="input-group mb-3">
  <label htmlFor="vehiculo" class="input-group-text" for="inputGroupSelect01" >Seleccione tipo de vehiculo</label>
  <select class="form-select" ref="TipoVehiculo" name="TipoVehiculo"onChange={this.onInputChange} id="inputGroupSelect01">
    {/* <!-- <select class="form-select" v-model="tipoVehiculo" id="inputGroupSelect01"> --> */}
    <option selected>Seleccione</option>
    <option value="Motocicleta">Motocicleta</option>
    <option value="Carro">Carro</option>
    <option value="Camionetas">Camionetas</option>
    <option value="Camion">Camion</option>
    <option value="Vans">Vans</option>
  </select>

  </div>
  <div class="input-group mb-3">
  {/* <!-- <span class="input-group-text" id="inputGroup-sizing-default" >{{ticketDato.tiempoI}}</span> -->
  <!-- <input v-model="ticketDato.tInicio" /> --> */}
</div>
  <button type="submit" class="btn btn-success" >Ingresar</button>
</form> 
 </div>
    )
  }
}
