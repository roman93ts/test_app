import React, {Component} from 'react';
import './App.css';
import CardPlate from './CardPlate';
import {robots} from './robots';
import SearchField from './SearchField';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchField: ''
		}
	}

	onField = (event) => {
		const newValue = event.target.value.toLowerCase();
		this.setState({
			searchField: newValue
		})
	}

	render(){
		const newRobots = this.state.robots.filter(user => {
			return user.name.toLowerCase().includes(this.state.searchField)	
		})
		return (
			<div>
				<h1>Bender Friends</h1>
				<SearchField changeSearchField={this.onField}/>
				<CardPlate array={newRobots}/>
			</div>
		);
	}
}

export default App;