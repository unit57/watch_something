import React, { Component } from 'react';


class Movie extends Component {
  render() {
    return (
	   <div id="renderMovieComponent">
	  		<div className="imageContainer">
	  			<img src="#"></img>
	  		</div>
	  		<button onClick={this.props.selectMovie}> selectmovie </button>
	  		<a href="/watchme"> Select </a>
  		</div>
    );
  }
}

export default Movie;