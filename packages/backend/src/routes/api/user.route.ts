import userController from '@/controllers/user.controller';
import catchAsync from '@/middlewares/catchAsync';
import { authenticate } from '@/middlewares/isLoggedIn';
import { Router, Request, Response } from 'express';

const userRouter: Router = Router();

userRouter.post('/register', async (_: Request, res: Response) => {
	res.send('Add registration logic there');
});

userRouter.post('/login', catchAsync(userController.logInUser));

userRouter.post('/newUser', userController.registerUser.bind(userController));

userRouter.get('/protected-route', authenticate, (req, res) => {
	res.json({ message: 'Protected route.' });
});

export default userRouter;
