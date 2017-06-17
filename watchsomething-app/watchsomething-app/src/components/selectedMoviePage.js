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
		  			<div id="selectedMovieTitle">{this.props.movie.title}</div>
		  			<p>{this.props.movie.overview}</p>
		  		<div id="amazonResultsDiv">
		  			<div id="watchme"> watch me on </div>
			  		<div id="amazonResults">
		          	 	<a target="_blank" href={this.props.amazonMovie}><img id="amazonImage" src="http://i.imgur.com/OEgZxFQ.jpg" width="199px"/></a>	
		          	</div>
		  			</div>
		  		</div>
	          	
	          	
          	
          	</div>

        </div>
    );
  }
}

export default selectedMoviePage;
