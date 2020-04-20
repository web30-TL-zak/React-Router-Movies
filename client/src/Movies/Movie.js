import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard';

const Movie = props => {
  const [movie, setMovie] = useState()
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>
  }

  return (
    <MovieCard movie={movie} saveMovie={saveMovie} />
    // <div className='save-wrapper'>
    //   <div className='movie-card'>
    //     <h2>{title}</h2>
    //     <div className='movie-director'>
    //       Director: <em>{director}</em>
    //     </div>
    //     <div className='movie-metascore'>
    //       Metascore: <strong>{metascore}</strong>
    //     </div>
    //     <h3>Actors</h3>

    //     {stars.map(star => (
    //       <div key={star} className='movie-star'>
    //         {star}
    //       </div>
    //     ))}
    //   </div>
    //   <div className='save-button' onClick={saveMovie}>Save</div>
    // </div>
  )
}

export default Movie
