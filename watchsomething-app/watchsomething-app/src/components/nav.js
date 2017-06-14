import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div id="navComponent">
          	<nav>
          	choose
          	<select ref={ (genre) => this.genre=genre }>
          		<option value="18"> comedy </option>
          		<option value="3"> horror </option>
          		<option value="5"> drama  </option>
          	</select>
          	<select ref={ (year) => this.year=year }>
          		<option value="2017"> 2017 </option>
          		<option value="2016"> 2016 </option>
          	</select>
          	<button onClick={ ()=>this.props.selectThree(this.genre, this.year) }> submit </button>
          	<button> random </button>
          	</nav>
      </div>
    );
  }
}

export default Nav;
