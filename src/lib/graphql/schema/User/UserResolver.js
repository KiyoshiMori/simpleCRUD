import db from '../../../db/models';
import generateJWT from '../../../helpers/generateJWT';

export default {
	Query: {
		async getInfo(_, __, { user }) {
			if (user) {
				return {
					authorized: true,
					...user,
				};
			} else {
				return {
					authorized: false,
				};
			}
		},
		async login(_, { input }, { setCookie }) {
			const { login, password } = input;

			return await db.users.findOne({
				where: {
					login,
					password,
				},
				include: [{
					model: db.users_info,
					attributes: ['id', 'role', 'username'],
				}],
			}).then(data => {
				console.log({ data: data.get() });
				const token = generateJWT(data.get().users_info.get());

				setCookie('jwt', token);

				return { token };
			});
		},
		async logout(_, __, { logout, res }) {
			res.clearCookie('jwt');
			return logout();
		},
	},
	Mutation: {
		async signup(_, { input }, { setCookie }) {
			const { login, password } = input;

			return await db.users.create({
				login,
				password,
				users_info: {
					username: login,
				},
			}, {
				include: [{
					model: db.users_info,
				}],
			}).then(data => {
				console.log({ data: data.get() });

				const token = generateJWT(data.get().users_info.get());

				setCookie('jwt', token);

				return { token };
			});
		},
	},
};
