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
	constructor(props) {
		super(props);

		this.state = {
			threeMovies: [],
			selectedMovie: []
		}
	}
	/* Get 3 movies and pass 3 movie click to nav */
	handleThreeMovieClick() {
		/* hard code url, but I'll need to get params for search from options  and link to heroku address*/
		axios.get("https://ericproject4wsapi.herokuapp.com/getmovie/2017/16")
		.then((res) => {
			console.log(res.data.userSelect)
		})
	}
	
	handleSelectedMovieClick() {
		console.log('click')
	}
	
	/* Pass handleSelected movie to movieChoices for React Router */
	movieChoicesComponent = () => {
		return (
		<MovieChoices selectMovie={this.handleSelectedMovieClick} />
			)
		}
	

	
  render() {
    return (
      <div className="App">
         <Title />
         <Nav selectThree={this.handleThreeMovieClick}/>
	       <Router>
	           <div>
	         	 <NavLink to="/">Home</NavLink>&nbsp;&nbsp;
	         	 <NavLink to="/about">About</NavLink>&nbsp;&nbsp; 
	           <Switch>
	         	 <Route path='/' exact render={() => this.movieChoicesComponent()}></Route>
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
