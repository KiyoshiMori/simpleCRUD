import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'components/Grid';
import Heading from 'components/Heading';
import styles from './styles.styl';

export default class ArticlesList extends Component {
	static propTypes = {
		data: PropTypes.arrayOf({
			header: PropTypes.string.isRequired,
		}).isRequired,
	};

	render() {
		const { data } = this.props;

		return (
			<Row className={styles.container}>
				<Col size={12}>
					<Heading type="h1">Articles</Heading>
				</Col>
				{data?.map(article => (
					<Col size={3} className={styles.article}>
						<div className={styles.articleImageContainer}>
							<img src={article.img || 'static/placeholder.png'} className={styles.articleImage} />
						</div>
						<Heading type="h2" secondary>
							{article.created_on}
						</Heading>
						<Heading type="h2" bold>
							{article.header}
						</Heading>
						Read more ->
					</Col>
				))}
			</Row>
		);
	}
}