import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import Modal from 'react-modal';

import { getArticles } from 'lib/graphql/queries/ArticlesQueries';

import { Row, Col } from 'components/Grid';
import ArticlesList from './components/ArticlesList';

import styles from './styles.styl';

export default class MainPage extends Component {
	state = {
		modalIsOpen: false,
	};

	handleToggleModal = () => this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));

	render() {
		const { modalIsOpen } = this.state;

		console.log({ modalIsOpen });

		return (
			<Fragment>
				<Query
					query={getArticles}
					variables={{
						token: 'test',
					}}
				>
					{({ data }) => (
						<ArticlesList
							data={data?.getArticles}
							openModal={this.handleToggleModal}
						/>
					)}
				</Query>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={this.handleToggleModal}
					className={styles.modal}
					overlayClassName={styles.modalOverlay}
				>
					<Row>
						<Col size={12} className={styles.modalHeader}>
							Test
						</Col>
						<Col size={6}>
							<form>
								<h1>test</h1>
								<input />
							</form>
						</Col>
					</Row>
				</Modal>
			</Fragment>
		);
	}
}