import fs from 'fs';
import db from '../../../db/models';

const { articles, articlesimages } = db;

const checkToken = async (user, cb, additionalCheck = true) => {
	if (user?.username) {
		if (additionalCheck) {
			return await cb();
		}
	}
	throw Error('Unauthorized');
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
			if (stream.truncated) {
				fs.unlinkSync(path);
			}
			reject(error);
		})
		.pipe(fs.createWriteStream(path))
		.on('error', error => reject(error))
		.on('finish', () => resolve({ id, path })));
};

const processUpload = async upload => {
	const { createReadStream, filename } = await upload;

	const stream = createReadStream();

	const { path } = await storeFS({ stream, filename });
	return path;
};

export default {
	Query: {
		async getArticles(_, __, { user }) {
			return await articles.findAll({
				include: [{
					model: articlesimages,
					attributes: ['file_path'],
				}],
				order: [['updated_at', 'DESC']],
			}).then(data => data.map(node => node.get({ plain: true })));
		},
	},
	Mutation: {
		async createArticle(_, { input }, { user }) {
			const {
				header,
				text,
				file,
			} = input;

			let file_path = null;

			if (file) {
				file_path = await processUpload(file);
			}

			return await checkToken(
				user,
				() => articles.create({
					created_at: new Date(),
					updated_at: new Date(),
					author: user.username,
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
			);
		},
		async removeArticle(_, { input }, { user }) {
			const { id } = input;

			return await checkToken(
				user,
				() => articles.destroy({
					where: {
						id,
						author: user.username,
					},
				}, {
					include: [{
						model: articlesimages,
					}],
				}),
			);
		},
	},
};
