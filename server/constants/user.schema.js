const $ERROR = {
	//* USERNAME *//
	USERNAME_TYPE_ERROR: `[VALIDATION] : "username" should be "string"!`,
	USERNAME_REQUIRED: `[VALIDATION] : "username" is required!`,
	USERNAME_MIN_LENGTH: `[VALIDATION] : "username" must be greater than or equal to "4" characters`,
	USERNAME_MAX_LENGTH: `[VALIDATION] : "username" must be less than or equal to "32" characters`,
	USERNAME_PATTERN: `[VALIDATION] : "username" is not matching by rules`,

	//* PASSWORD *//
	PASSWORD_REQUIRED: `[VALIDATION] : "password" is required!`,
	PASSWORD_MIN_LENGTH: `[VALIDATION] : "password" must be greater than or equal to "8" characters`,
	PASSWORD_MAX_LENGTH: `[VALIDATION] : "password" must be less than or equal to "32" characters`,
};

/**
 *# RULES
 ** 1- never start with underscore(_), dot(.), hyphen(-) or numbers(from 0 to 9)
 ** 2- never use more than 2 times repeatedly dots(.. or ...) and hyphen(-- or ---)
 ** 3- never use more than 3 times repeatedly underscore(_)
 ** 4- never end with underscore(_), dot(.) or hyphen(-)
 ** 5- length should be greater than or equal to 4 characters
 ** 6- length should be less than or equal to 32 characters
 */
const USERNAME_PATTERN =
	/^(?![_0-9\-\.])(?!.*\.\.)(?!.*___)(?!.*\-\-)(?!.*[\.\-_]$)[^\W][\w_\.\-]{4,32}$/gi;

module.exports = { $ERROR, USERNAME_PATTERN };
