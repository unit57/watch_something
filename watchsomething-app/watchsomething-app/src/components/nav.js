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
              <option className="optionColor" value="28"> an Action Movie  </option>
              <option className="optionColor" value="18"> a Drama </option>
              <option className="optionColor" value="27"> a Horror Movie </option>
              {/*<option className="optionColor" value="10770"> a TV Movie </option>*/}
              <option className="optionColor" value="16"> an Animation </option>
              <option className="optionColor" value="878"> a SciFi Movie  </option>
              {/*<option className="optionColor" value="99"> a Documentary </option>*/}
              {/*<option className="optionColor" value="10749"> a Romance Movie </option>*/}
              <option className="optionColor" value="35"> a Comedy </option>
              <option className="optionColor" value="10752"> a War Movie  </option>
              {/*<option className="optionColor" className="optionColor" value="36"> a History Movie </option>*/}
              <option className="optionColor" value="53"> a Thriller  </option>
              <option className="optionColor" value="80"> a Crime Movie  </option>
              {/*<option className="optionColor" value="37"> a Western  </option>*/}
              {/*<option className="optionColor" value="8"> a Family Movie </option>*/}
              {/*<option className="optionColor" value="12"> Musical </option>*/}
            </select>&nbsp;
           <span> from the &nbsp;</span>
            <select ref={(year) => this.year=year}>
              <option value="2010"> 2010's </option>
              <option value="2000"> 2000's </option>
              {/*<option value="1990"> 1990's </option>*/}
              {/*<option value="1980"> 1980's </option>*/}
            </select>&nbsp;&nbsp;&nbsp;
           <Link to="/" style={{ textDecoration: 'none' }}> <button className="button" onClick={()=>this.props.selectThree(this.genre, this.year)}> {this.props.search}</button></Link>
            </nav>
            
      </div>
    );
  }
}

export default Nav;
