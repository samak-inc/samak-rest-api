const $ = require('zod');
const { $ERROR, USERNAME_PATTERN } = require('../constants/user.schema.js');

/* CUSTOM TYPES */

const $USERNAME = $.string({
	invalid_type_error: $ERROR.USERNAME_TYPE_ERROR,
	required_error: $ERROR.USERNAME_REQUIRED,
})
	.trim()
	.min(4, $ERROR.USERNAME_MIN_LENGTH)
	.max(32, $ERROR.USERNAME_MAX_LENGTH)
	.regex(USERNAME_PATTERN, $ERROR.USERNAME_PATTERN);

const $PASSWORD = $.preprocess(
	(value) => String(value),
	$.string({
		required_error: $ERROR.PASSWORD_REQUIRED,
	})
		.min(8, $ERROR.PASSWORD_MIN_LENGTH)
		.max(32, $ERROR.PASSWORD_MAX_LENGTH)
		.default('00000000')
);

const $USER_ID = $.union([$USERNAME, $.number()]);

/* USER SCHEMA */
class UserSchema {
	static CREATE = $.object({
		username: $USERNAME,
		password: $PASSWORD,
	});

	static DELETE = $.object({
		userId: $USER_ID,
		username: $USERNAME,
	});

	static UPDATE_USERNAME = $.object({
		userId: $USER_ID,
		oldUsername: $USERNAME,
		newUsername: $USERNAME,
	});

	static UPDATE_AVATAR = $.object({
		userId: $USER_ID,
		username: $USERNAME,
		newAvatar: $.any(),
	});
}

module.exports = UserSchema;
