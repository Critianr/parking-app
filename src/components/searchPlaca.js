import axios from "axios";
import React, { Component, useState, state } from "react";

export default class searchPlaca extends Component{
  state = {
    dataPlaca:[]
  }
  async componentDidMount(){
    const res = await axios.get('https://app58.herokuapp.com/api/tickets/')
    this.setState({dataPlaca: res.data})    
    console.log(this.state.dataPlaca)
  }
  render(){
    return(
<div className="container">
  <h1>Busqueda de Vehiculo</h1>
  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Ingrese Placa" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <div class="input-group-append">
    <button class="btn btn-secondary" type="button">Buscar</button>
  </div>
</div>
<div class="table table-hover table-responsive">
  <table class="table">
  <thead>
   <tr>
   <th scope="col">Placa</th>
    <th scope="col">Entrada</th>
    <th scope="col">puesto</th>
    <th scope="col">vehiculo</th>
   </tr>
  </thead>
  <tbody>
  <tr  >
    <th>placa</th>
    <td >tiempoInicio</td>
    <td>ticket.Puesto</td>
    <td>ticket.TipoVehiculo</td>
    <td v-if="ticketeditar.valorP=true">0</td> 
   
     </tr>
  </tbody>
  </table>
</div>
</div>
    )
  }
}
