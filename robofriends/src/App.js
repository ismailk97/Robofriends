import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots.js'
import SearchBox from './SearchBox';


class App extends Component {
	//forsto ikke så mye av her.
	constructor(){
		super()
		this.state = {
		robots: robots,
		searchfield: ''

	}
}

//hver gang input endrer seg skal vi få en event
onSearchChange = (event) => {
	this.setState({searchfield: event.target.value })
	console.log(event.target.value);
	
	}





	//render brukes sammen med { Component}
	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
	console.log(filteredRobots);
		return(
			<div className='tc'>

				<h1> RoboFriends</h1>
				<SearchBox searchChange={ this.onSearchChange }/>
				<CardList robots={filteredRobots}/>
			</div>
		);
	}
	
		
}




export default App;