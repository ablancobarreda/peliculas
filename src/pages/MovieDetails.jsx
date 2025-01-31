import {get} from "../data/httpClient.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieImg} from "../util/getMovieImg.jsx";
import "../pages/MovieDetails.css"
export function MovieDetails(){
    const {movieId}= useParams()
    const [movie, setMovie]=useState([])
    const [generos, setGeneros]=useState([])
    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data)
            console.log(data)
            setGeneros(data.genres[0])
        })
    },[movieId])
    const imageUrl=getMovieImg(movie.poster_path,500)
    return(<div className="detailsContainer">
        <img className="col movieImage" src={imageUrl} alt={movie.title}/>
        <div className="col movieDetails">
            <p className="title">
                <strong>Título: </strong>
                {movie.title}
            </p>
            <p>
                <strong>Género: </strong>
                {generos.name}
            </p>
            <p>
                <strong>Descripción: </strong>
                {movie.overview}
            </p>
        </div>
    </div>)
}