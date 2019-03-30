
module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('users_info', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: Sequelize.INTEGER,
			references: {
				model: 'users',
				key: 'id',
			},
		},
		username: {
			type: Sequelize.STRING,
		},
		role: {
			type: Sequelize.STRING,
			values: ['user', 'admin'],
			defaultValue: 'user',
		},
	}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('users_info'),
};
