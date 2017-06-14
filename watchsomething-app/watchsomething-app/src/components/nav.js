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
          		<option value="2017"> 2017 </option>
          		<option value="2016"> 2016 </option>
          		<option value="2015"> 2015 </option>
          		<option value="2014"> 2014 </option>
          		<option value="2013"> 2013 </option>
          		<option value="2012"> 2012 </option>
          		<option value="2011"> 2011 </option>
          		<option value="2010"> 2010 </option>
          		<option value="2009"> 2009 </option>
          		<option value="2008"> 2008 </option>
          		<option value="2007"> 2008 </option>
          	</select>
          	<button onClick={()=>this.props.selectThree(this.genre, this.year)}> submit </button>
          	<button> random </button>
          	</nav>
      </div>
    );
  }
}

export default Nav;
