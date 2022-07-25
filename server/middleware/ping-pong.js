const router = require('express').Router();
const moment = require('moment');

function response(status, data, { req, res }) {
	const $status = {
		method: req.method,
		endpoint: req.originalUrl,
		status,
		date: moment().utcOffset('+0000').toString(),
	};

	return res
		.status(status)
		.send({ ...data, $status })
		.end();
}

router.use('/ping|/ping/*', function (req, res) {
	return response(200, { message: 'PONG' }, { req, res });
});

module.exports = router;
