import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Page1 extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div>
				<h1>Hello from  Page1</h1>
				{this.props.children}
 			</div>
		)
	}
}


export default Page1;