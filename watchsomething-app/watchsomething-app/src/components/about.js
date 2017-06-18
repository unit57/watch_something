import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
	   <div className="aboutComponent tempBorder">
	      	<div id="aboutDetails"> 
	      	<br />
	      	<p id="question">You know when you want to watch something and you kind of know what you want to watch, but you don't really know what you what to watch?</p>
	      	<p id="answer">That's where Watch Something comes in.</p>
	      	<br />
	      	<p id="howItWorks">Select the decade and genre you want to watch and Watch Something will find you three movies to choose from. 
	      	Hit search again for more!
	      	<br />
	      	<br />
	      	If your selection is available on Prime, Rental or Digital purchase you can watch right now. Otherwise, you can order a copy and watch later.
	      	<br />
	      	<br />
	      	<p id="finePrint">Watch Something is powered by <a target="_blank" href="https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html">Amazon's Product Advertising API</a>, <a target="_blank" href="https://www.themoviedb.org/documentation/api">The Movie Database API</a> and <a target="_blank" href="#"> Watch Something API</a>.</p>
	      	</p>
	      	</div>
	      

       </div>
    );
  }
}

export default About;
