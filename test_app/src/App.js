import React, {Component} from 'react';
import './App.css';
import CardPlate from './CardPlate';
import {robots} from './robots';
import SearchField from './SearchField';

class App extends Component {
	constructor(){
		super()
		this.state = {

		}
	}

	// changeSearchField = (event) => {
	// 	console.log(event.target.value)
	// }

	render(){
		return (
			<div>
				<h1>Bender Friends</h1>
				<SearchField />
				<CardPlate array={robots}/>
			</div>
		);
	}
}

export default App;