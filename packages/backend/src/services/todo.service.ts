import { PrismaClient, Todo } from '@prisma/client';

const prisma = new PrismaClient();

export default class TodoService {
	async findAll(): Promise<Todo[]> {
		const todos = await prisma.todo.findMany();
		return todos;
	}
}
