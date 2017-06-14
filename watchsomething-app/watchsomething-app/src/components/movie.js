import React, { Component } from 'react';


class Movie extends Component {
  render() {
    return (
	   <div id="renderMovieComponent">
	  		<div className="imageContainer">
	  			<img src={this.props.image}></img>
	  		</div>
	  		<p>{this.props.title}</p>
	  	{/*<p>{this.props.overview}</p>*/}
	  		<button onClick={() => this.props.selectMovie(this.props.index)}> selectmovie </button>
	  		<a href="/watchme"> Select </a>
  		</div>
    );
  }
}

export default Movie;