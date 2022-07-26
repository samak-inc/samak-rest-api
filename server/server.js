const express = require('express');
const CORS = require('cors');
const httpLogger = require('./middleware/http-logger.js');
const PING_PONG = require('./middleware/ping-pong.js');
const routes = require('./routes/routes.js');

const app = express();

/* USE MIDDLEWARE */
app.use(httpLogger());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(CORS());

/* PING:PONG */
app.use(PING_PONG);

/* ROUTER */
// NOTE : should use API Routes as Subdomain
app.use('/api', routes.api);

/* LISTENER AND EXPORTS */
function listener(port) {
	return new Promise(function (resolve, reject) {
		return app.listen(port, function () {
			return resolve({ app, port });
		});
	});
}

module.exports = listener;
