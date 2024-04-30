import { PrismaClient, Todo } from '@prisma/client';

const prisma = new PrismaClient();

export default class TodoService {
	async findAll(): Promise<Todo[]> {
		return prisma.todo.findMany();
	}
}
