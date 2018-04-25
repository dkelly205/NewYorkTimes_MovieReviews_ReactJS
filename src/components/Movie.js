import React from 'react';

class Movie extends React.Component{
render(){
  const {altTag} = `Cover image of ${this.props.title}`;

  return(

    <div className="movie">

      <img
        src={this.props.image}
        alt={altTag}
      />

      <a href={this.props.review}><h3>{this.props.title}</h3></a>



    </div>
  );
}

}

export default Movie;
