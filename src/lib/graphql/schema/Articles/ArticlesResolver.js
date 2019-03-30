import fs from 'fs';
import db from '../../../db/models';

const { articles, articlesimages } = db;

const checkToken = async (input, cb) => {
	if (input.token) {
		return await cb();
	}
	throw Error('wrong token');
};

const uploadDir = 'static/uploads';

const storeFS = ({ stream, filename }) => {
	const id = 1;

	if (!fs.existsSync(uploadDir)) {
		fs.mkdirSync(uploadDir);
	}

	const path = `${uploadDir}/${id}-${filename}`;
	return new Promise((resolve, reject) => stream
		.on('error', error => {
			if (stream.truncated)
			// Delete the truncated file.
			{ fs.unlinkSync(path); }
			reject(error);
		})
		.pipe(fs.createWriteStream(path))
		.on('error', error => reject(error))
		.on('finish', () => resolve({ id, path })));
};

const processUpload = async upload => {
	const { createReadStream, filename, mimetype } = await upload;
	const data = await upload;

	console.log({ data });

	const stream = createReadStream();
	const { id, path } = await storeFS({ stream, filename });
	return path;
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
					order: [['updated_at', 'DESC']],
				}).then(data => data.map(node => node.get({ plain: true }))),
			);
		},
	},
	Mutation: {
		async createArticle(_, { input }) {
			const { token, header, text, file } = input;

			let file_path = null;

			if (file) {
				file_path = await processUpload(file);
			}

			return await checkToken(
				input,
				() => articles.create({
					created_at: new Date(),
					updated_at: new Date(),
					author: 'test',
					header,
					text,
					articlesimage: {
						file_path,
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
