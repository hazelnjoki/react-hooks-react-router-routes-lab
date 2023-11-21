import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
     {movies.map((movies,index)=>{
      return(
        <ul key={index}>
        <li>Name: {movies.title}</li>
        <li>Time: {movies.time}</li>
        <li>Genres: {movies.genres}</li>
      </ul>
      )
     })}
    </div>
  );
}

export default Movies;