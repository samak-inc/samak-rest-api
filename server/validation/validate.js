// zod library required
function validate(schema, data) {
	return new Promise(function (resolve, reject) {
		//=> validate data by native zod schema safe-parse method
		let res = schema.safeParse(data);

		//=> if not success validation
		if (!res.success) {
			//=> return error by rejecting
			reject(res.error);
			return;
		}

		//=> return validate data by resolving
		return resolve(res.data);
	});
}

module.exports = validate;
