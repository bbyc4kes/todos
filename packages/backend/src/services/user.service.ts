import { TUser } from '@/types/user.types';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const findAll = async (): Promise<TUser[]> => {
	const users = await prisma.user.findMany();
	return users;
};

const findById = async (id: number): Promise<TUser | null> => {
	const userById = await prisma.user.findUnique({
		where: {
			id,
		},
	});
	return userById;
};

export const create = async (data: Prisma.UserCreateInput): Promise<TUser> => {
	const newUser = await prisma.user.create({
		data,
	});
	return newUser;
};

const destroy = async (id: number): Promise<TUser | null> => {
	const removedTodo = prisma.user.delete({
		where: {
			id,
		},
	});
	return removedTodo;
};

export default {
	findAllUsers: findAll,
	findUserById: findById,
	createUser: create,
	destroyUser: destroy,
};
