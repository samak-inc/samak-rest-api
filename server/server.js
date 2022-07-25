const express = require('express');
const httpLogger = require('./middleware/http-logger.js');
const app = express();

/* USE MIDDLEWARE */
app.use(httpLogger());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* LISTENER AND EXPORTS */
function listener(port) {
	return new Promise(function (resolve, reject) {
		return app.listen(port, function () {
			return resolve({ app, port });
		});
	});
}

module.exports = listener;
