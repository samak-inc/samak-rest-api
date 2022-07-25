const router = require('express').Router();

router.use('/ping|/ping/*', function (req, res) {
	return res.status(200).send({ message: 'PONG' }).end();
});

module.exports = router;
