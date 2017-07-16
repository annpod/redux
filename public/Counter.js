import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { counterActionsAdd, counterActionsDelete } from './actions';
import counterApp from './reducers';

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	add() {
		this.props.addClick();
	}
	delete() {
		this.props.deleteClick();
	}

	render() {
		return (
			<div>
				<h1>Hello from  counter</h1>
				<h2>Counter: {this.props.global.counter}</h2>
				<button  onClick={this.add.bind(this)}>Add</button>
				<button  onClick={this.delete.bind(this)}>Delete</button>
 			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addClick: () => dispatch(counterActionsAdd("Add")),
		deleteClick: () => dispatch(counterActionsDelete("Delete"))
	}
}

const mapStateToProps = (state) => {
	return state;
}

const DefaultApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default DefaultApp;