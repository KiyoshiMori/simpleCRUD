module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('articlesimages', {
		article_id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			references: {
				model: 'articles',
				key: 'id',
			},
		},
		file_path: {
			type: Sequelize.STRING,
		},
	}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('articlesimages'),
};
