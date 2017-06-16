import React, { Component } from 'react';

class selectedMoviePage extends Component {
  render() {
    return (
	   <div className="selectedMoviePage tempBorder">
       		<div id="movieAndDescription">
	  			<div id="selectedMoviePosterDiv">
	  				<img className="poster"src={this.props.movie.posterpath} height="" width=""></img>
	  			</div>
	  			<div id="selectedMovieDetails">
		  			<p>{this.props.movie.title}</p>
		  			<p>{this.props.movie.overview}</p>
		  		<div id="amazonResults">
	          	 	<a target="_blank" href={this.props.amazonMovie}>watch me on amazon</a>
	          	</div>
		  		</div>
	          	
	          	
          	
          	</div>

        </div>
    );
  }
}

export default selectedMoviePage;
