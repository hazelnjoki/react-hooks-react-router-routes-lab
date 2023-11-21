import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((actors,index)=>{
      return(
        <ul key={index}>
          <li>Name:{actors.name}</li>
          <li>Movies:{actors.movies}</li>
        </ul>
      )
    })}
  </div>;
}

export default Actors;