import React, { PropTypes } from 'react';
import  { render } from 'react-dom';
import { connect } from 'react-redux';
import Counter from './Counter';

class Main extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div>
				Hello from Main
				<Counter/>
 			</div>
		)
	}
}


export default Main;