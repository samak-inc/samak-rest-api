require('dotenv').config();

function env(name) {
	return process.env[name];
}

module.exports = env;
