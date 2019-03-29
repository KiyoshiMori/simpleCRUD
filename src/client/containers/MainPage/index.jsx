import React, { Component } from 'react';

import { Row, Col } from 'components/Grid';
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
			<ArticlesList data={articles} />
		);
	}
}