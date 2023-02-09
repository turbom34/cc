import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planateer}) {
  const planeteer = Planeteer.map((planeteer) => {
    return(
      <planateer key={planeteer.id}/>
    )
    })
  return (
    <ul className="cards">
      {planeteer}
    </ul>
  );
}

export default PlaneteersContainer;
