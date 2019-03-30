import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Row, Col } from 'components/Grid';
import Heading from 'components/Heading';
import Button from 'components/Button';
import styles from './styles.styl';

export default class ArticlesList extends Component {
	static propTypes = {
		data: PropTypes.arrayOf({
			header: PropTypes.string.isRequired,
		}).isRequired,
		openModal: PropTypes.func.isRequired,
		username: PropTypes.string,
	};

	static defaultProps = {
		username: null,
	};

	render() {
		const { data, openModal, username } = this.props;
		return (
			<Row className={styles.container}>
				<Col size={12} className={styles.containerHeader}>
					<Heading type="h1">Articles</Heading>
					<Button icon="plus" onClick={openModal}>
						Post an article
					</Button>
				</Col>
				{data?.map(article => (
					<Col size={3} className={styles.article}>
						<div className={styles.articleImageContainer}>
							<img
								src={article.articlesimage?.file_path || 'static/placeholder.png'}
								className={styles.articleImage}
							/>
						</div>
						<Row>
							<Col size={6}>
								<Heading type="h2" secondary>
									{moment.unix(article.created_at / 1000).format('DD.MM.YYYY')}
								</Heading>
							</Col>
							<Col size={6}>
								{(username === article.author) && (
									<Heading type="h2" secondary>
										remove
									</Heading>
								)}
							</Col>
						</Row>
						<Heading type="h2" bold>
							{article.header}
						</Heading>
						<Heading type="h2" secondary>
							{article.text}
						</Heading>
					</Col>
				))}
			</Row>
		);
	}
}