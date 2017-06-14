import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div id="navComponent">
          	<nav>
          	choose
          	<select ref={(genre) => this.genre=genre}>
          		<option value="18"> Drama </option>
          		<option value="27"> Horror </option>
          		<option value="10770"> TV Movie </option>
          		<option value="16"> Animation </option>
          		<option value="878"> SciFi  </option>
          		<option value="99"> Documentary </option>
          		<option value="10749"> Romance </option>
          		<option value="35"> Comedy </option>
          		<option value="10752"> War  </option>
          		<option value="36"> History  </option>
          		<option value="53"> Thriller  </option>
          		<option value="80"> Crime  </option>
          		<option value="37"> Western  </option>
          		<option value="8"> Family </option>
          		<option value="28"> Action  </option>
          		<option value="12"> Music </option>
          	</select>
          	<select ref={(year) => this.year=year}>
          		<option value="2015"> 2010's </option>
          		<option value="2005"> 2000's </option>
          		<option value="1995"> 1990's </option>
          		<option value="1985"> 1980's </option>
          		<option value="1975"> 1970's </option>
          	</select>
          	<button onClick={()=>this.props.selectThree(this.genre, this.year)}> submit </button>
          	</nav>
      </div>
    );
  }
}

export default Nav;
