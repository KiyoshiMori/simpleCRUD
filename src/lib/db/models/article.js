import DataTypes from 'sequelize';
import sequelize from '../index';

module.exports = () => {
	const Article = sequelize.define('articles', {
		header: DataTypes.STRING,
		text: DataTypes.TEXT,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
		author: DataTypes.STRING,
		author_id: DataTypes.STRING,
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	}, {
		timestamps: false,
		underscored: true,
	});

	Article.associate = models => {
		Article.hasOne(models.articlesimages);
	};

	return Article;
};
