import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Movie extends Component {
  render() {
    return (
	   <div id="renderMovieComponent">
	  		<div className="imageContainer">
	  			<Link to="/watchme"><img src={this.props.image} onClick={() => this.props.selectMovie(this.props.index)}></img></Link>
	  		</div>
	  		{/*<p>{this.props.title}</p>*/}
	  		{/*<p>{this.props.overview}</p>*/}
	  		<br />
	  		{/*<Link to="/watchme"><button className="button movieButton" onClick={() => this.props.selectMovie(this.props.index)}> Details </button></Link>*/}

  		</div>
    );
  }
}

export default Movie;