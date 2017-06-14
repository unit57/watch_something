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

		// bind
		this.handleThreeMovieClick = this.handleThreeMovieClick.bind(this);
	}
/* Get 3 movies and pass 3 movie click to nav */
	handleThreeMovieClick(genre, year) {
		console.log('e-----', genre.value)
		console.log('e-----', year.value)
		//randomize function use with data to mix up data
		function randomize(a, b) {
		    return Math.random() - 0.5;
		}

		console.log('this', this)

		/* hard code url, but I'll need to get params for search from options  and link to heroku address*/
		axios.get("https://ericproject4wsapi.herokuapp.com/getmovie/"+ year.value +"/"+ genre.value)
		.then((res) => {
			const length = res.data.userSelect.sort(randomize).length;
			let movieSplit = res.data.userSelect.sort(randomize).splice(length-3, 3)
			this.setState({
				threeMovies: movieSplit
			})
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
         <Nav selectThree={(genre, year)=>this.handleThreeMovieClick(genre, year)}/>
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
