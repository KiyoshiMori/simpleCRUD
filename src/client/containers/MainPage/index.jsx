import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { getArticles } from 'lib/graphql/queries/ArticlesQueries';

import ArticlesList from './components/ArticlesList';

export default class MainPage extends Component {
	state = {
		articles: [
			{
				created_on: '25-03-19',
				header: 'test',
			},
			{
				created_on: '26-03-19',
				header: 'test2',
			},
			{
				created_on: '26-03-19',
				header: 'test2',
			},
			{
				created_on: '26-03-19',
				header: 'test2',
			},
			{
				created_on: '26-03-19',
				header: 'test2',
			},
		],
	};

	render() {
		const { articles } = this.state;

		return (
			<Query
				query={getArticles}
				variables={{
					token: 'test',
				}}
			>
				{({ data }) => (
					<ArticlesList data={data?.getArticles} />
				)}
			</Query>
		);
	}
}