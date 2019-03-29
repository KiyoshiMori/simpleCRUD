import db from '../../../db/models';

const { articles, articlesimages } = db;

const checkToken = async (input, cb) => {
	if (input.token) {
		return await cb();
	} else {
		throw Error('wrong token');
	}
};

export default {
	Query: {
		async getArticles(_, { input }) {
			return await checkToken(
				input,
				() => articles.findAll({
					include: [{
						model: articlesimages,
						attributes: ['file_path'],
					}],
				}).then(data => data.map(node => node.get({ plain: true }))),
			);
		},
	},
	Mutation: {
		async createArticle(_, { input }) {
			const { token, header, text } = input;

			return await checkToken(
				input,
				() => articles.create({
					created_at: new Date(),
					updated_at: new Date(),
					author: 'test',
					header,
					text,
					articlesimage: {
						file_path: 'test',
					},
				}, {
					include: [{
						model: articlesimages,
					}],
				}),
			).then(post => {
				console.log({ post, test: post.id });
				return post;
			});
		},
	},
};