import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((directors, index) => {
      return (
        <ul key={index}>
          <li>Name: {directors.name}</li>
          <li>Movies: {directors.movies}</li>
        </ul>
      )
    })}
  </div>;
}

export default Directors;