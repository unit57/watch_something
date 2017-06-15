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
	          	 <a href={this.props.amazonMovie}>watch me on amazon</a>
	          	</div>
          	
          	</div>

        </div>
    );
  }
}

export default selectedMoviePage;
