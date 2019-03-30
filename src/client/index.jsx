import React, { PureComponent, Fragment } from 'react';
import { Switch, Route } from 'react-router';
import { Query } from 'react-apollo';

import Header from 'components/Header';

import MainPage from 'containers/MainPage';

import { getInfo } from 'lib/graphql/queries/UserQueries';

export default class extends PureComponent {
	render() {
		return (
			<Query
				query={getInfo}
			>
				{({ data: { getInfo = {} } }) => {
					const { authorized, username } = getInfo;

					return (
						<Fragment>
							<Header loggined={authorized} username={username} />
							<Switch>
								<Route
									render={() => <MainPage username={username} />}
								/>
							</Switch>
						</Fragment>
					)
				}}
			</Query>
		);
	}
}
