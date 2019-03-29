import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Header from './components/Header';
import { Row, Col } from './components/Grid';

export default class extends Component {
	render() {
		return (
			<div>
				<Header />
				<Row>
					<Col>
						Testing
					</Col>
				</Row>
				<Switch>
					<Route render={() => <div>Test</div>} />
				</Switch>
			</div>
		);
	}
}
