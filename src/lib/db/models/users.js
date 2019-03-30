module.exports = (sequelize, DataTypes) => {
	const users = sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		login: DataTypes.STRING,
		password: DataTypes.STRING,
	}, {
		timestamps: false,
	});

	users.associate = function (models) {
		users.hasOne(models.users_info, {
			foreignKey: 'id',
		});
	};

	return users;
};
