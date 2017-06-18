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
import Footer from "./components/footer"




class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			threeMovies: [],
			selectedMovie: [],
			amazonMovie:[],
			searchButtons: true,
			aboutButton: true,
			bgImageURL: 'url("http://i.imgur.com/QZI3Mz7.png")'
		}

		// bind
		this.handleThreeMovieClick = this.handleThreeMovieClick.bind(this);
		this.handleSelectMovieClick = this.handleSelectMovieClick.bind(this);
	}




/* Get 3 movies and pass 3 movie click to nav */
	handleThreeMovieClick(genre, year) {
		let selectedGenre = parseInt(genre.value);
		let selectedYear = parseInt(year.value);
		// console.log(typeof(selectedYear), selectedGenre)
		//randomize function use with data to mix up data
		function randomize(a, b) {
		    return Math.random() - 0.5;
		}

		console.log('this', `https://ericproject4wsapi.herokuapp.com/getmovie/${selectedYear}/${selectedGenre}`)

		/* hard code url, but I'll need to get params for search from options  and link to heroku address*/
		axios.get(`https://ericproject4wsapi.herokuapp.com/getmovie/${selectedYear}/${selectedGenre}`)
		.then((res) => {
			const length = res.data.userSelect.sort(randomize).length;
			let movieSplit = res.data.userSelect.sort(randomize).splice(length-3, 3)
			this.setState({
				threeMovies: movieSplit,
				aboutButton:true
				
			})
		})
	}
	/* SELECT MOVIES CLICK */
	handleSelectMovieClick(index) {
		
		this.setState({
			selectedMovie: this.state.threeMovies[index]
		})
		axios.get(`https://ericproject4wsapi.herokuapp.com/getMovieLink/${this.state.threeMovies[index].title}`)
		.then((res) => {
			this.setState({
				amazonMovie: res.data.things[0],
				searchButtons: false,
			})

			console.log(res.data.things[0])
		})
	}
	/* BACK BUTTON CLICK */
	 handleBackButtonClick() {
	 	this.setState({
	 		searchButtons: true,
	 		aboutButton:true
	 	})
	 	
	 }

	 handleAboutClick() {
	 	this.setState({
	 		aboutButton: false
	 	})

	 }

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
	
	/* SEARCH BUTTONS*/
	renderNavComponent = () => {
		if(this.state.searchButtons === true){
			return (
				<Nav selectThree={(genre, year)=>this.handleThreeMovieClick(genre, year)} searchButtons={this.state.searchButtons}/>
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
