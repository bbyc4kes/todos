import { PrismaClient } from '@prisma/client';
import UserService from '@/services/user.service';
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import {
	TExpressUserFunction,
	TExpressUserLogoutFunction,
} from '@/types/user.types';

const prisma = new PrismaClient();

export class UserController {
	constructor(private userService: UserService) {}

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

			const existingUser = await prisma.user.findUnique({
				where: { email },
			});
			if (existingUser) {
				return res.status(400).json({ message: 'User already exists' });
			}

			const hashedPassword = await bcrypt.hash(password, 10);

			const newUser = await prisma.user.create({
				data: {
					email,
					password: hashedPassword,
					name,
				},
			});

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

const userController = new UserController(new UserService());
export default userController;
