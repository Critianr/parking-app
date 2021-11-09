import React from "react";

const PanelMain = () =>{
    return (
        <div className="container">
        <form  class="container">
       
      <h2 class="">Ingrese informacion correpondiente</h2>
    <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Ingrese placa</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="ticketDato.placa" />
  {/* <!-- <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="placa"> --> */}
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Ingrese puesto</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="ticketDato.Puesto" />
  
</div>

  <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01" >Seleccione tipo de vehiculo</label>
  <select class="form-select" v-model="ticketDato.TipoVehiculo" id="inputGroupSelect01">
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
    );
}

export default PanelMain;