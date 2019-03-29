import React, { Component, Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';
import Modal from 'react-modal';

import { getArticles, postArticle } from 'lib/graphql/queries/ArticlesQueries';

import { Row, Col } from 'components/Grid';
import Heading from 'components/Heading';
import Input from 'components/Input';
import Button from 'components/Button';
import ArticlesList from './components/ArticlesList';

import styles from './styles.styl';

export default class MainPage extends Component {
	state = {
		modalIsOpen: false,
		articleHeader: '',
		articleText: '',
	};

	handleToggleModal = () => this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));

	handleInput = e => this.setState({ [e.target.name]: e.target.value });

	clearArticleFields = () => this.setState({ articleHeader: '', articleText: '' });

	render() {
		const { modalIsOpen, articleHeader, articleText } = this.state;

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
					<Mutation
						mutation={postArticle}
						refetchQueries={[
							{
								query: getArticles,
								variables: {
									token: 'test',
								},
							},
						]}
					>
						{(mutate, { loading }) => (
							<Row>
								<Col size={12} className={styles.modalHeader}>
									<Heading
										type="h2"
										bold
									>
										Post an article
									</Heading>
								</Col>
								<Col size={6} className={styles.modalContent}>
									<form
										onSubmit={async e => {
											e.preventDefault();
											await mutate({
												variables: {
													header: articleHeader,
													text: articleText,
													token: 'test',
												},
											});
											this.handleToggleModal();
											this.clearArticleFields();
										}}
									>
										<Input
											label="Header"
											name="articleHeader"
											value={articleHeader}
											onChange={this.handleInput}
										/>
										<Input
											textarea
											label="Text"
											name="articleText"
											value={articleText}
											onChange={this.handleInput}
										/>
										<Button
											size="small"
											secondary
											type="submit"
											loading={loading}
											disabled={!articleHeader || !articleText}
										>
											Save
										</Button>
									</form>
								</Col>
							</Row>
						)}
					</Mutation>
				</Modal>
			</Fragment>
		);
	}
}