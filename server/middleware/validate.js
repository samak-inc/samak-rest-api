/**
 * NOTE : use this if you want to use as middleware
 * for suing as promise function, use `validate` in `validation/validate.js`
 */
function validate(schema) {
	return function (req, res, next) {
		let _res = schema.safeParse(req.body);

		if (!_res.success) {
			return res.status(400).send({ message: _res.error });
		}

		req.$validation.data = _res.data;
		return next();
	};
}

module.exports = validate;
