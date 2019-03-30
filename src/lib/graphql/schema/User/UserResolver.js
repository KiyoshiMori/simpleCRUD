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
	},
};
