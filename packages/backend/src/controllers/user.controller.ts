import { Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';
import UserService from '@/services/user.service';

const prisma = new PrismaClient();

export class UserController {
	constructor(private userService: UserService) {}

	//associate userId with Todo / , userId: number
	async createNewUser(_: Request, res: Response): Promise<void> {
		try {
			const newUser = await prisma.user.create({
				data: {
					email: 'test@example.com',
					name: 'max',
				},
			});
			res.json({
				message: 'Your user was successfully created!',
				success: true,
				newUser,
			});
		} catch (error) {
			res.json(error);
		}
	}
}

const userController = new UserController(new UserService());
export default userController;
