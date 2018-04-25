import React from 'react';
import Movie from './Movie'


const MovieList = (props) => {
  if (props.movies == null || props.movies.length === 0) {
    return <p>Loading...</p>;
  }
  return(
    <div>
      {props.movies.map((movie, index) => {
        return(
          <Movie
            key={index}
            title={movie.display_title}
            image={movie.multimedia.src}
            review={movie.link.url}


          />
        )
      })}
    </div>
  )

}

export default MovieList;
