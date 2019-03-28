import Articles from '../../../db/models/article';

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
			return await checkToken(input, () => Articles().findAll());
		},
	},
	Mutation: {
		async createArticle(_, { input }) {
			const { token, header, text } = input;

			return await checkToken(input, () => Articles().create({
				created_at: new Date(),
				updated_at: new Date(),
				author: 'test',
				header,
				text,
			}));
		},
	},
};