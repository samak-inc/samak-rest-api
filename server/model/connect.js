const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;

// prisma
// 	.$connect()
// 	.then(() => {})
// 	.catch((error) => {
// 		new Error(error);
// 	})
// 	.finally(() =>
// 		prisma
// 			.$disconnect()
// 			.then(() => {})
// 			.catch((error) => {
// 				new Error(error);
// 			})
// 	);
