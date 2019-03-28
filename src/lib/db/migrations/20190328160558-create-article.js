module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('Articles', {
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
		id: {
			type: Sequelize.INTEGER,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('Articles'),
};
