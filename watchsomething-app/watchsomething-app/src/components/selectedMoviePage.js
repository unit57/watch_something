import React, { Component } from 'react';
/* render the user selected movie  along with a link to Amazon Video */
class selectedMoviePage extends Component {
  render() {
    return (
	   <div className="selectedMoviePage tempBorder">
       		<div id="movieAndDescription">
	  			<div id="selectedMoviePosterDiv">
	  				<img className="poster"src={this.props.movie.posterpath} height="" width="" alt="movie poster"></img>
	  			</div>
	  			<div id="selectedMovieDetails">
		  			<div id="selectedMovieTitle">{this.props.movie.title}</div>
		  			<p id="renderedOverview">{this.props.movie.overview}</p>
		  		<div id="amazonResultsDiv">
		  			<div id="watchme"> watch me on </div>
			  		<div id="amazonResults">
		          	 	<a target="_blank" rel="noopener noreferrer" href={this.props.amazonMovie}><img alt="amazon link"id="amazonImage" src="http://i.imgur.com/OEgZxFQ.jpg" width="199px"/></a>	
		          	</div>
		  			</div>
		  		</div>
	          	
	          	
          	
          	</div>

        </div>
    );
  }
}

export default selectedMoviePage;
