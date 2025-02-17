import {useEffect, useState} from "react";
import {get} from "../data/httpClient.jsx";
import {MovieCard} from "./MovieCard.jsx";
import "../components/ContextMovieCard.css"
export function ContextMovieCard() {
  const [movies,SetMovies]=useState([])
  useEffect(()=>{
    get("/discover/movie").then((data)=>{
      SetMovies(data.results);
      console.log(data)
    });
  },[]);
  return (<ul className="container">
    {movies.map((movie)=>(
<MovieCard key={movie.id} movie={movie} />
    ))}
  </ul>);
}