import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';


render(
	<div>
		<h1>js/appp</h1>
	</div>,
	document.getElementById("app")
)
