import { TodoType } from '@/types/todos.type';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const findAll = async (): Promise<TodoType[]> => {
	const allTodos = await prisma.todo.findMany();
	return allTodos;
};

const findById = async (id: number): Promise<TodoType | null> => {
	const todoById = await prisma.todo.findUnique({
		where: {
			id,
		},
	});
	return todoById;
};

export const create = async (
	data: Prisma.TodoCreateInput,
): Promise<TodoType> => {
	const newTodo = await prisma.todo.create({
		data,
	});
	return newTodo;
};

const update = async (id: number, data: TodoType): Promise<TodoType | null> => {
	const updatedTodo = await prisma.todo.update({
		where: {
			id,
		},
		data,
	});
	return updatedTodo;
};

const destroy = async (id: number): Promise<TodoType | null> => {
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
): Promise<TodoType | null> => {
	const updatedTodoIsComplete: TodoType | null = await prisma.todo.update({
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
): Promise<TodoType | null> => {
	const updatedTodoIsPublic: TodoType | null = await prisma.todo.update({
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
