import React, { Component } from 'react';
import {Link} from 'react-router-dom';

/* commented out data was excessive but I left in as reference */

/* this componet renders the movie poster image and anchors it so it is the link to the selected movie component */
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