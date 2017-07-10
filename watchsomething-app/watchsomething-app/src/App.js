import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect, Link } from 'react-router-dom';
import axios from 'axios';

/* IMPORT COMPONENTS */
import Title from "./components/title"
import Nav from "./components/nav"
import MovieChoices from "./components/movieChoices"
import SelectedMoviePage from "./components/selectedMoviePage"
import About from "./components/about"





class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			/* The 3 movies that will come form the user selection */
			threeMovies: [],
			/* The one movie selected by the user, this will be used to rened the selected movie page component */
			selectedMovie: [],
			/* The Selected movie is the movie result that is returned from the amazon query and is used in the link to amazon */
			amazonMovie:[],
			/* When true search buttons appear when flase, the don't and watch something else appears */
			searchButtons: true,
			/* toggles about button and home button on bottom of screen */
			aboutButton: true,
			/* Background image set as a state because I wanted it ti dissapear but only happened after second click */
			bgImageURL: 'url("http://i.imgur.com/QZI3Mz7.png")',
			/* Search toggle search again */
			search: "Search"
		}

		// bind
		this.handleThreeMovieClick = this.handleThreeMovieClick.bind(this);
		this.handleSelectMovieClick = this.handleSelectMovieClick.bind(this);
	}




	/* Get 3 movies and pass 3 movie click to nav */
	handleThreeMovieClick(genre, year) {
		let selectedGenre = parseInt(genre.value,10);
		let selectedYear = parseInt(year.value,10);
		// console.log(typeof(selectedYear), selectedGenre)
		//randomize function use with data to mix up data
		function randomize(a, b) {
		    return Math.random() - 0.5;
		}

		// console.log('this', `https://ericproject4wsapi.herokuapp.com/getmovie/${selectedYear}/${selectedGenre}`)

		/* hard code url, but I'll need to get params for search from options  and link to heroku address*/
		axios.get(`https://ericproject4wsapi.herokuapp.com/getmovie/${selectedYear}/${selectedGenre}`)
		.then((res) => {
			const length = res.data.userSelect.sort(randomize).length;
			let movieSplit = res.data.userSelect.sort(randomize).splice(length-3, 3)
			this.setState({
				threeMovies: movieSplit,
				aboutButton:true,
				search:"Search Again!"
				
			})
		})
	}
	/* SELECT MOVIES CLICK */
	handleSelectMovieClick(index) {
		/* index is passed back up to set the state of selected movie referencing the state of 3 selected movies it takes the title calls 
		amazon and that res sets the state of amazon movie which is passed into selected movie component */
		this.setState({
			selectedMovie: this.state.threeMovies[index]
		})
		/* remove '/' from movie titles */
		let ogtitle = this.state.threeMovies[index].title
		let remove = ogtitle.split('/')
		let newTitle = remove.join(' ')
		/* ADD YEAR TO QUERY - Will have to test accepting year param on express route */
		/*let year = this.state.threeMovies[index].year;*/
		axios.get(`https://ericproject4wsapi.herokuapp.com/getMovieLink/${newTitle}`)
		.then((res) => {
			this.setState({
				amazonMovie: res.data.things[0],
				searchButtons: false,
			})

			/*console.log(res.data.things[0])*/
		})
	}
	/* BACK BUTTON CLICK */
	 handleBackButtonClick() {
	 	this.setState({
	 		searchButtons: true,
	 		aboutButton:true
	 	})
	 	
	 }
	 /* ABOUT BUTTON CLICK */
	 handleAboutClick() {
	 	this.setState({
	 		aboutButton: false
	 	})

	 }
	 /* HOME BUTTON CLICK */
	 handleHomeClick() {
	 	this.setState({
	 		aboutButton: true
	 	})


	 }
	
	/* Pass handleSelected movie to movieChoices for React Router */
	movieChoicesComponent = () => {
		return (
		<MovieChoices selectMovie={this.handleSelectMovieClick} threeMovies={this.state.threeMovies} />
			)
		};
	/* Selected movie to selected movie component */
	/* This is how I wanted to cut off the route to this component when the was no response data, but It doesn't work */
	selectedMoviePageComponent = () => {
		if(this.state.amazonMovie !== [] ){

		return (
			<SelectedMoviePage movie={this.state.selectedMovie} amazonMovie={this.state.amazonMovie}/>
			)
		} 
			return (
				<Redirect to="/" />
				)
		};
	
	/* SEARCH BUTTONS toggle Watch Something Else*/
	renderNavComponent = () => {
		if(this.state.searchButtons === true){
			return (
				<Nav selectThree={(genre, year)=>this.handleThreeMovieClick(genre, year)} searchButtons={this.state.searchButtons} search={this.state.search}/>
				)
		}else{
			return (
			<div className="navComponent">
				<NavLink to="/"><button className="button" onClick={()=>this.handleBackButtonClick()}>Watch Something Else</button> </NavLink>
			</div>
				)	
	} }
	/* ABOUT AND HOME TOGLE BUTTONS */
	renderAboutHomeToggle = () => {
		if(this.state.aboutButton === true ) {
			return(
			<Link to="/about"><button className="button" onClick={()=> this.handleAboutClick()}>About</button></Link>
			)
		} 
			return(
			<Link to="/"><button className="button" onClick={()=> this.handleHomeClick()}>Home</button></Link> 
			)
		}

	
  render() {
    return (
      <div className="App">
         <Title />
         {/*<Nav selectThree={(genre, year)=>this.handleThreeMovieClick(genre, year)} searchButtons={this.state.searchButtons}/>*/}
	       <Router>
	           <div>
	         	 {this.renderNavComponent()} 
	           <Switch>
	         	 <Route path='/' exact render={() => this.movieChoicesComponent()}></Route>
	         	 <Route path='/watchme' exact render={() => this.selectedMoviePageComponent()}></Route>
	         	 <Route path='/about'  component={About}></Route>
	           </Switch>
	           <br />
	          	{this.renderAboutHomeToggle()}   
	        </div>

	      </Router> 
    
       
       {/*<Footer />*/}
             
      </div>
    );
  }
}

export default App;
