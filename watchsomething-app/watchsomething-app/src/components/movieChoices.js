import React, { Component } from 'react';
import Movie from "./movie"
/* this component takes in the 3 random movies passed as props and maps through them with the movie component whick displays each individual movie in its own instantion of the movie component */
class MovieChoices extends Component {
  render() {
    return (
	   <div className="movieContainerComponent tempBorder"> 
	      	<div id="movieResults">	
	      	{this.props.threeMovies.map((element, index) => {
	      		return (
	      			<Movie key={index} index={index} image={element.posterpath} title={element.title} year={element.year} overview={element.overview} buttonID={element.title} selectMovie={this.props.selectMovie} />
	      			)
	      	})}

	      	
	          
	         </div>
	    </div>
    );
  }
}

export default MovieChoices;
