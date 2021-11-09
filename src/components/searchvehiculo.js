import React from "react";

const SearchVehiculo = () =>{
    return(
        <div class="container">
        <h1>Gestion tickets</h1>
      <div class="control"> 

      <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Ingres Placa" aria-describedby="inputGroup-sizing-default"  v-model="search" />
      <button type="button" class="btn btn-primary" > Buscar </button>
      </div>
      
        <div class="item-resul" >
        <table class="table">
               <thead>
                   <tr>
                       <th scope="col">Placa</th>
                       <th scope="col">Entrada</th>
                       <th scope="col">puesto</th>
                       <th scope="col">vehiculo</th>
                       <th scope="col">salida</th>
                       <th scope="col">Pagar</th>
                       <th scope="col">Acciones</th>
                   </tr>
               </thead>
               <tbody>
                   <tr  >
                       <th scope="row">placa</th>
                       <td >tiempoInicio </td>
                       <td>Puesto</td>
                       <td>TipoVehiculo</td>
                         <td>tiempoFinal </td> 
                       
                       <td> $ valor a pagar </td>
                   
                       
                       <td> <button type="button" class="btn btn-warning">Valor a pagar</button> 
                        </td>
                   </tr>
               </tbody>
 
            </table>   
        </div>
        </div>
    );
}
export default SearchVehiculo;