
module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		login: {
			allowNull: false,
			unique: true,
			type: Sequelize.STRING,
		},
		password: {
			allowNull: false,
			type: Sequelize.STRING,
		},
	}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
