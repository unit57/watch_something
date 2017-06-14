import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Movie extends Component {
  render() {
    return (
	   <div id="renderMovieComponent">
	  		<div className="imageContainer">
	  			<img src={this.props.image}></img>
	  		</div>
	  		<p>{this.props.title}</p>
	  	{/*<p>{this.props.overview}</p>*/}
	  		<Link to="/watchme"><button onClick={() => this.props.selectMovie(this.props.index)}> selectmovie </button></Link>

  		</div>
    );
  }
}

export default Movie;