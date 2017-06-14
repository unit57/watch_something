import React, { Component } from 'react';

class selectedMoviePage extends Component {
  render() {
    return (
	   <div className="selectedMoviePage tempBorder">
       		<div id="movieAndDescription">
	  			<img src={this.props.movie.posterpath}></img>
	  			<p>{this.props.movie.title}</p>
	  			<p>{this.props.movie.overview}</p>
	          	
	          	<div id="amazonResults">
	          	 AMAZON RESULTS HERE
	          	</div>
          	
          	</div>

        </div>
    );
  }
}

export default selectedMoviePage;
