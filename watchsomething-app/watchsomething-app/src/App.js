import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2> Watch Something</h2>
          
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
          	<button> submit </button>
          	</nav>
          </div>

          <div id="movieComponent"> 
          	<div id="movieResults">
	          	<div id="movieContainer">
	          		<div className="imageContainer">
	          			<img src="#"></img>
	          	</div>
	          		<button> select </button>
	          	</div>
	         </div>
          </div>
   
          <div id="selectedMoviePage">
          		<div id="movieAndDescription">
          			<img src="#"></img>
          			<p>title</p>
          			<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet pariatur illo alias non, voluptatem natus quo, obcaecati ipsum numquam doloremque doloribus assumenda, dicta sapiente atque eligendi odio, itaque officiis!</p>
          		</div>
          	<div id="amazonResults">
          	 AMAZON RESULTS HERE
          	</div>


          </div>

       
      </div>
    );
  }
}

export default App;
