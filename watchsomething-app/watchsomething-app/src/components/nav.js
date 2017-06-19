import React, { Component } from 'react';
import {Link} from 'react-router-dom';

/* Use Refs to grab the selected genre and decade */
/* Some options are commmented out because they have strange results and I can't take the time to filter them manually right now, but they work */
class Nav extends Component {
  render() {
    return (
      <div className="navComponent">
            <nav>
            <span>I want to watch &nbsp;</span>
            <select ref={(genre) => this.genre=genre}>
              <option value="28"> an Action Movie  </option>
              <option value="18"> a Drama </option>
              <option value="27"> a Horror Movie </option>
              {/*<option value="10770"> a TV Movie </option>*/}
              <option value="16"> an Animation </option>
              <option value="878"> a SciFi Movie  </option>
              {/*<option value="99"> a Documentary </option>*/}
              {/*<option value="10749"> a Romance Movie </option>*/}
              <option value="35"> a Comedy </option>
              <option value="10752"> a War Movie  </option>
              <option value="36"> a History Movie </option>
              <option value="53"> a Thriller  </option>
              <option value="80"> a Crime Movie  </option>
              {/*<option value="37"> a Western  </option>*/}
              {/*<option value="8"> a Family Movie </option>*/}
              <option value="12"> Musical </option>
            </select>&nbsp;
           <span> from the &nbsp;</span>
            <select ref={(year) => this.year=year}>
              <option value="2010"> 2010's </option>
              <option value="2000"> 2000's </option>
              <option value="1990"> 1990's </option>
              <option value="1980"> 1980's </option>
            </select>&nbsp;&nbsp;&nbsp;
           <Link to="/" style={{ textDecoration: 'none' }}> <button className="button" onClick={()=>this.props.selectThree(this.genre, this.year)}> Search </button></Link>
            </nav>
            
      </div>
    );
  }
}

export default Nav;
