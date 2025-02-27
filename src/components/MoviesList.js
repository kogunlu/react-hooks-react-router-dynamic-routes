import React from 'react'
import { render } from 'react-dom'
import {Link} from "react-router-dom"

function MoviesList({movies}) {
    const renderMovies = Object.keys(movies).map((movieID) => {
     return  (
     <li key={movieID} >
        <Link to={`/movies/${movieID}`}>
            {movies[movieID].title}
        </Link>
    </li>) 
    })


  return (
    <ul>
        {renderMovies}
    </ul>
  )
}

export default MoviesList