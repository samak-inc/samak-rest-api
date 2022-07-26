const redis = require('redis');
const env = require('../../utils/env.js');

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

class Redis {
	static insert(key, value) {
		return new Promise(function (resolve, reject) {
			return client.set(key, value, function (error, reply) {
				if (error) {
					return reject(error);
				}

				return resolve({ key, value, status: reply });
			});
		});
	}

	static has(key) {
		return new Promise(function (resolve, reject) {
			return client.exists(key, function (error, reply) {
				if (error) {
					return reject(error);
				}

				return resolve(reply === REDIS_EXISTS_KEY);
			});
		});
	}

	static read(key) {
		return new Promise(function (resolve, reject) {
			return client.get(key, function (error, reply) {
				if (error) {
					return reject(error);
				}

				if (reply == '') {
					return reject({
						message: `[REDIS] : the ${key} as "KEY" doesn't exist`,
					});
				}

				return resolve({ key, value: reply });
			});
		});
	}

	static $db = client;
}
