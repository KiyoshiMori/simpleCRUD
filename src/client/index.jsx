import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Header from 'components/Header';

import MainPage from 'containers/MainPage';

export default class extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route render={() => <MainPage />} />
				</Switch>
			</div>
		);
	}
}
