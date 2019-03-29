module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('articles', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		header: {
			type: Sequelize.STRING,
		},
		text: {
			type: Sequelize.TEXT,
		},
		created_at: {
			type: Sequelize.DATE,
		},
		updated_at: {
			type: Sequelize.DATE,
		},
		author: {
			type: Sequelize.STRING,
		},
	}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('articles'),
};
