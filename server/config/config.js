require('dotenv').config();

module.exports = {
	database: {
		postgresql: {
			url: process.env.DATABASE_POSTGRESQL_URL,
		},
		redis: {
			host: process.env.DATABASE_REDIS_HOST,
		},
	},
	server: {
		port: process.env.PORT || process.env.SERVER_PORT || 3000,
	},
};
