import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import axios from 'axios';

/* IMPORT COMPONENTS */
import Title from "./components/title"
import Nav from "./components/nav"
import MovieChoices from "./components/movieChoices"
import SelectedMoviePage from "./components/selectedMoviePage"
import About from "./components/about"
import Footer from "./components/footer"




class App extends Component {
  render() {
    return (
      <div className="App">
         <Title />
         <Nav />
	       <Router>
	           <div>
	         	 <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
	         	 <NavLink to="/watchme">SELECTED RESULTS</NavLink>&nbsp;&nbsp;
	         	 <NavLink to="/about">About</NavLink>&nbsp;&nbsp; 
	           <Switch>
	         	 <Route path='/' exact component={MovieChoices}></Route>
	         	 <Route path='/watchme' exact component={SelectedMoviePage}></Route>
	         	 <Route path='/about'  component={About}></Route>
	           </Switch>
	        </div>
	      </Router> 
          
       <Footer /> 
             
      </div>
    );
  }
}

export default App;
