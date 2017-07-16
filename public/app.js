import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import Main from './Main';
import Page1 from './Page1';
import NotFound from './NotFound';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import counterApp from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {syncHistoryWithStore, routerReducer } from 'react-router-redux';


const store = createStore(
	combineReducers(
		{
			global: counterApp,
			routing: routerReducer
		}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route path="/" component={Main} />
				<Route path="/Page1" component={Page1} />
				<Route path='/*' component={NotFound} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("app")
)