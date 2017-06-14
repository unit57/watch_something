import React, { Component } from 'react';
import Movie from "./movie"

class MovieChoices extends Component {
  render() {
    return (
	   <div className="movieContainerComponent tempBorder"> 
	      	<div id="movieResults">	
	          	<Movie selectMovie={this.props.selectMovie}/>
	          	<Movie />
	          	<Movie />
	         </div>
	    </div>
    );
  }
}

export default MovieChoices;
