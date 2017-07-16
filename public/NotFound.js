import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div>
				Page not Found
 			</div>
		)
	}
}


export default NotFound;