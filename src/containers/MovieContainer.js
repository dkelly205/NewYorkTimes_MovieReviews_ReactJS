import React from 'react';
import Heading from '../components/Heading';
import MovieList from '../components/MovieList'


class MovieContainer extends React.Component{
  constructor(props){

    super(props);
    this.state = {
      movies:[]
    }
  }

  componentDidMount(){
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=ea17afe75601433cb2b0cf9e8d05636d")
    .then(response => response.json())
    .then(json => this.setState({movies: json.results}));
  }



  render(){
    return(
      <article>
        <Heading title="Movie Reviews" />
        <MovieList movies={this.state.movies}/>
      </article>
    )
  }
}


export default MovieContainer;
