import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Header from './components/Header';

export default class extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route render={() => <div>Test</div>} />
				</Switch>
			</div>
		);
	}
}
