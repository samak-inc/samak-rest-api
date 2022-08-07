const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const HTTP_LOG_FORMAT =
	':method :url :status - [:date[web]] [:response-time ms] [:total-time ms]';
// TODO : use root directory as first slice of filePath
// TODO : using /server/config/log/http.log as filePath
// TODO : or /config/log/http.log
const HTTP_LOG_FILE_PATH = path.resolve(__dirname, '..', '..', 'http.log');

const customToken = {
	userName() {
		return morgan.token('current-username', function (req, res) {
			// return req.[username|header.username]
		});
	},

	userRole() {
		return morgan.token('user-role', function (req, res) {
			// return req.[user-role|header.user-role]
		});
	},
};

function writeLogFile(logFilePath) {
	return fs.createWriteStream(logFilePath, {
		flags: 'a',
		encoding: 'utf8',
	});
}

function httpLogger() {
	return morgan(HTTP_LOG_FORMAT, {
		stream: writeLogFile(HTTP_LOG_FILE_PATH),
	});
}

module.exports = httpLogger;
