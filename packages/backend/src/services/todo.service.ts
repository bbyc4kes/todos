import { TTodo } from '@/types/todos.type';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const findAll = async (): Promise<TTodo[]> => {
	const allTodos = await prisma.todo.findMany();
	return allTodos;
};

const findById = async (id: number): Promise<TTodo | null> => {
	const todoById = await prisma.todo.findUnique({
		where: {
			id,
		},
	});
	return todoById;
};

export const create = async (data: Prisma.TodoCreateInput): Promise<TTodo> => {
	const newTodo = await prisma.todo.create({
		data,
	});
	return newTodo;
};

const update = async (id: number, data: TTodo): Promise<TTodo | null> => {
	const updatedTodo = await prisma.todo.update({
		where: {
			id,
		},
		data,
	});
	return updatedTodo;
};

const destroy = async (id: number): Promise<TTodo | null> => {
	const removedTodo = prisma.todo.delete({
		where: {
			id,
		},
	});
	return removedTodo;
};

const updateIsComplete = async (
	id: number,
	isCompleted: boolean,
): Promise<TTodo | null> => {
	const updatedTodoIsComplete: TTodo | null = await prisma.todo.update({
		where: {
			id,
		},
		data: {
			isCompleted,
		},
	});
	return updatedTodoIsComplete;
};

const updateIsPublic = async (
	id: number,
	isPublic: boolean,
): Promise<TTodo | null> => {
	const updatedTodoIsPublic: TTodo | null = await prisma.todo.update({
		where: {
			id,
		},
		data: {
			isPublic,
		},
	});
	return updatedTodoIsPublic;
};

export default {
	findAll,
	findById,
	create,
	update,
	destroy,
	updateIsComplete,
	updateIsPublic,
};
