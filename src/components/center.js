import React from "react";
import Dashboar from "../dashboar";
import PanelMain from "./panelmain";
import PanelTickets from "./paneltickets";

const Center = () =>{
    return(
         <div class="row">
           <div class="col-4">
          <Dashboar />
        </div>
        <div class="col-8">
            {/* <PanelMain />   */}
        {/* <PanelTickets /> */}
        
        </div>
        </div>

    );
}

export default Center;