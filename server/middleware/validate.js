/**
 * NOTE : use this if you want to use as middleware
 * for suing as promise function, use `validate` in `validation/validate.js`
 */
function validate(schema) {
	return function (req, res, next) {
		let $res = schema.safeParse(req.body);

		if (!$res.success) {
			return res.status(400).send({ message: $res.error });
		}

		req.$valid = $res.data;
		return next();
	};
}

module.exports = validate;
