import DataTypes from 'sequelize';
import sequelize from '../index';

module.exports = () => {
	const articlesimages = sequelize.define('articlesimages', {
		article_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		file_path: DataTypes.STRING,
	}, {
		underscored: true,
		timestamps: false,
	});

	articlesimages.associate = models => {
		articlesimages.belongsTo(models.articles);
	};

	return articlesimages;
};
