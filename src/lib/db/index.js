import Sequelize from 'sequelize';

module.exports = new Sequelize('simplecrud', 'postgres', '19066611', {
	host: 'localhost',
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});
