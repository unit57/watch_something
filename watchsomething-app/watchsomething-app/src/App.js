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
import Footer from "./components/about"




class App extends Component {
  render() {
    return (
      <div className="App">
          <Title />
          <Nav />
          <MovieChoices />
          <SelectedMoviePage />
          <About />
          <Footer />    
      </div>
    );
  }
}

export default App;
