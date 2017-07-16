import React, { PropTypes } from 'react';
import  { render } from 'react-dom';
import { connect } from 'react-redux';
import Counter from './Counter';
import { data } from './data';

class Main extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
			}
	}
	componentDidMount() {
		
		}
	

	render() {

		const Data = JSON.parse(data);
		console.log(Data);

		return (
			<div>
				Hello from Main 
				<h1>{Data.page1.title}</h1>
				<h1>{Data.page1.date}</h1>
				<Counter/>
 			</div>
		)
	}
}


export default Main;