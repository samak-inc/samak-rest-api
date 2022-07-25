const redis = require('redis');
const env = require('../utils/env.js');

const REDIS_PORT = env('DATABASE_REDIS_PORT');
const REDIS_HOST = env('DATABASE_REDIS_HOST');
const REDIS_EXISTS_KEY = 1;

const client = redis.createClient(REDIS_PORT, REDIS_HOST);

client
	.connect()
	.then(function (value) {})
	.catch((error) => {
		return new Error(error);
	})
	.finally(() =>
		client
			.disconnect()
			.then((value) => {})
			.catch((error) => {
				return new Error(error);
			})
	);

client.on('connect', function () {
	console.log(`[REDIS_DATABASE] : connected successfully!`);
});
client.on('disconnect', function () {
	console.log(`[REDIS_DATABASE] : disconnected successfully!`);
});


