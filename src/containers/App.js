import React, { Component } from 'react';
import CardList from '../components/cardList.js';
import SearchBox from '../components/searchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
var boolean ;

class App extends Component {	

	
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response =>{
		return response.json();
	})
	.then(users => {
		this.setState({ robots: users});
	})

	//simplified
	// fetch('https://jsonplaceholder.typicode.com/users')
	// .then(response => response.json())
	// .then(users => this.setState({ robots: users}))

}

onSearchChange = (event) =>{
	//test e
	this.setState({ searchfield: event.target.value });
	
}

	render() {
			const filteredRobots = this.state.robots.filter(robot =>{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	if(this.state.robots.length === 0) {
		return <h1>Loading..</h1>
	} else {
		
			return (
				<div className ='tc' id='demo'>
					<h1 className='f1'>Skynet Employees</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
						<CardList robots={filteredRobots} boolean={boolean}/>	
						</ErrorBoundry>
					</Scroll>			
				</div>

				);
		}
			}
	}



export default App;