const prisma = require('./connect.js');

class UserModel {
	static USER_TYPE_CUSTOMER = 1;
	static USER_TYPE_EMPLOYEE = 2;

	static create(username, email, userType) {
		return client.user.create({
			data: {
				username: username,
				email: email,
				roleId: roleId,
			},
			include: [],
		});
	}

	static updateDepartment(userId, newDepartment) {
		return client.user.update();
	}
}
