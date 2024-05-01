import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export default class UserService {
	async findAll(): Promise<User[]> {
		const users = await prisma.user.findMany();
		return users;
	}
}
