import DataTypes from 'sequelize';
import sequelize from '../index';

module.exports = () => {
	const Article = sequelize.define('Articles', {
		header: DataTypes.STRING,
		text: DataTypes.TEXT,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
		author: DataTypes.STRING,
		id: {
		    type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	}, {
		timestamps: false,
    });

	return Article;
};
// save