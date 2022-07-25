const express = require('express');
const app = express();


/* LISTENER AND EXPORTS */
function listener(port) {
	return new Promise(function (resolve, reject) {
		return app.listen(port, function () {
			return resolve({ app, port });
		});
	});
}

module.exports = listener;
