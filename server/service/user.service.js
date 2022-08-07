const UserModel = require('../model/user.model.js');

// TODO :
// - use UserModel as internal in UserService, or,
// - send UserModel on the Controller when invoke UserService

class UserService {
	constructor() {}

	async getUser(userId) {
		// return await db.User.findOne({_id: userId});
	}
}

module.exports = UserService;
