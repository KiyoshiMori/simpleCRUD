import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

export default class extends Component {
	render() {
		return (
			<Container>
				<Switch>
					<Route render={() => <div>Test</div>} />
				</Switch>
			</Container>
		);
	}
}
