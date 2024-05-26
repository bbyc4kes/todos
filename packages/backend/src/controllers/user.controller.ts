import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import {
	TExpressUserFunction,
	TExpressUserLogoutFunction,
} from '@/types/user.types';
import { TExpressFunction } from '@/types/todos.types';
import userService from '@/services/user.service';

const prisma = new PrismaClient();

class UserController {
	getAllUsers: TExpressFunction = async (req, res) => {
		const users = await userService.findAllUsers();
		return res.json(users);
	};

	getUserById: TExpressFunction = async (req, res) => {
		const { id } = req.params;

		const parsedId = parseFloat(id);
		const user = await userService.findUserById(parsedId);

		return res.json(user);
	};

	logInUser: TExpressUserFunction = async (req, res) => {
		const { email, password } = req.body;

		const user = await prisma.user.findUnique({ where: { email } });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const isValidPassword = await bcrypt.compare(password, user.password);
		if (!isValidPassword) {
			return res.status(401).json({ message: 'Invalid password' });
		}

		const token = jwt.sign(
			{ id: user.id },
			process.env.JWT_SECRET as Secret,
			{
				expiresIn: '1h',
			},
		);

		res.json({ token });
	};

	registerUser: TExpressUserFunction = async (req, res) => {
		try {
			const { email, password, name } = req.body;

			console.log(
				'inside the backend registerUser: ',
				email,
				password,
				name,
			);
			const existingUser = await prisma.user.findUnique({
				where: { email },
			});
			console.log('existingUser: ', existingUser);
			if (existingUser) {
				return res.status(400).json({ message: 'User already exists' });
			}

			const hashedPassword = await bcrypt.hash(password, 10);

			const newUser = await userService.createUser({
				email,
				password: hashedPassword,
				name,
			});
			console.log('newUser: ', newUser, 'user id??', newUser.id);
			const token = jwt.sign(
				{ id: newUser.id },
				process.env.JWT_SECRET as Secret,
				{ expiresIn: '1h' },
			);

			res.status(201).json({ token });
		} catch (error) {
			console.error('Error registering user:', error);
			res.status(500).json({ message: 'Internal server error' });
		}
	};

	destroyTodo: TExpressFunction = async (req, res) => {
		const { id } = req.params;

		const parsedId = parseFloat(id);
		const deletedTodo = await userService.destroyUser(parsedId);

		return res.json(deletedTodo);
	};

	logoutUser: TExpressUserLogoutFunction = (req, res, next) => {
		try {
			if (!req.user) {
				return res
					.status(401)
					.json({ message: 'User is not logged in' });
			}

			localStorage.removeItem('token');
			req.logout(function (err: Error) {
				if (err) {
					return next(err);
				}
			});
		} catch (error) {
			console.error('Error logging out user:', error);
			res.status(500).json({ message: 'Internal server error' });
		}
	};
}

export default new UserController();
