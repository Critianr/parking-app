import React from "react";

const PanelTickets = () => {
    return(
        <div>
    
        <h1> Panel de tickets</h1>

<div class="accordion" v-for="(item, n) in datotickets" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        placaxxx
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul class="list-group list-group-horizontal">
  <li class="list-group-item"><strong>Ingreso:</strong>  </li>
  <li class="list-group-item"> fecha de inglresoxxx </li>  
  <li class="list-group-item">Puesto: ###</li>
  <li class="list-group-item"><strong>Salida:</strong> </li>
  <li class="list-group-item"> fecha de salida xxx </li>
  <li class="list-group-item">Valor a pagar: $$$ </li>
</ul>
      </div>
    </div>
  </div>
</div>
</div>
        );
}

export default PanelTickets;