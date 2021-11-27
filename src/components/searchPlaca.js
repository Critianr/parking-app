import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import { DateTimePicker } from "@material-ui/pickers";

export default function SearchPlaca (){

  const [tickets, setTickets] = useState([]);
  const [fechaSelecionada, setFechaSelecionada] = useState(new Date());
  const [busqueda, setBusqueda] = useState("");
  const [fechaI, setFechaI] = useState();
  const fecha = ''
const getPlaca=async()=>{
    await axios.get("https://app58.herokuapp.com/api/tickets/placa/" + busqueda)  
    .then(res=>{
      setTickets(res.data);
      console.log(res.data);
    }).catch(error=>{
      console.log(error);
    })
  }
const handleChange=e=>{
  console.log("Busqueda: " + e.target.value)
  setBusqueda(e.target.value);
  
}
// const handleChangeFecha=e=>{
//   console.log("feberi f: " + e.target.value)
//   setFechaI(e.target.value);
// }
// const handleChangeFecha=(e)=>{
//   console.log("fecha: " + e.target.value)
//   // setFechaSelecionada(e.target.value)
  
// }



const liquidaTiempo = async()=>{
 let star = fechaSelecionada
//  let end = 
console.log(star)
console.log(tickets)
}
useEffect(()=>{
  getPlaca();
  // finalizaTiempo();
},[])


  // render(){
    return(
<div className="container">
  <h1 className="py-5 text-center">Busqueda de Vehiculo</h1>
  <div class="input-group mb-3">
  <input type="text" class="form-control" onChange={handleChange} placeholder="Busqueda por Placa" value={busqueda} />
  <div class="input-group-append">
    <button class="btn btn-secondary" onClick={getPlaca} type="button">Buscar</button>
  </div>
</div>

<div class="table table-hover table-responsive">
  <table class="table">
  <thead>
   <tr>
   <th className="col">Placa</th>
    <th className="col">Puesto</th>
    <th className="col">vehiculo</th>
    <th className="col">Inicio</th>
    <th className="col">Finalizo</th>

   </tr>
  </thead>
  <tbody>
    {tickets &&
    tickets.map((ticket)=>(
    <tr key={ticket.id} > 
     <td>{ticket.placa}</td>
    <td>{ticket.Puesto}</td>
    <td>{ticket.TipoVehiculo}</td>
    <td>{ticket.tiempoInicio}</td>
        
    <td>
      {/* <label>Fecha</label> */}
      <DateTimePicker value={fechaSelecionada} onChange={setFechaSelecionada} />
    </td>

    </tr>
    
    ))}

  </tbody>
  </table>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-10">
    <button type="button" onClick={liquidaTiempo} class="btn btn-warning">Finalizar Tiempo</button>
    </div>
    <div className="col-2"><button type="button" class="btn btn-success">Valor a Pagar</button></div>
  </div>
</div>
</div>

    )
  }
// }
