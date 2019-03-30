
module.exports = (sequelize, DataTypes) => {
	const users_info = sequelize.define('users_info', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		username: DataTypes.STRING,
		role: {
			type: DataTypes.STRING,
			values: ['user', 'admin'],
		},
	}, {
		timestamps: false,
		freezeTableName: true,
	});

	users_info.associate = function (models) {
		users_info.belongsTo(models.users, {
			foreignKeyConstraint: true,
			onDelete: 'CASCADE',
		});
	};

	return users_info;
};
