import React from 'react'

export const Movie = ({movie}) => {
  return (
    <div className='movie'>
        <div className='poster'>
            <img src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path}`} alt="movie poster"/>
        </div>
        <h2>{movie.original_title}</h2>
    </div>
  )
}
