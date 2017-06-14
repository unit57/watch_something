import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div id="navComponent">
          	<nav>
          	choose
          	<select>
          		<option> comedy </option>
          		<option> horror </option>
          		<option> drama  </option>
          	</select>
          	<select>
          		<option> 2017 </option>
          		<option> 2016 </option>
          	</select>
          	<button onClick={this.props.selectThree}> submit </button>
          	<button> random </button>
          	</nav>
      </div>
    );
  }
}

export default Nav;
