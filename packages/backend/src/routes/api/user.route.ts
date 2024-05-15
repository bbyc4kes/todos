import userController from '@/controllers/user.controller';
import catchAsync from '@/middlewares/catchAsync';
import { authenticate } from '@/middlewares/isLoggedIn';
import validateBody from '@/middlewares/validateBody';
import { userSchema } from '@/schemas/user.schema';
import { Router } from 'express';

const userRouter: Router = Router();

userRouter.get('/logout', userController.logoutUser);
userRouter.get('/protected-route', authenticate, (req, res) => {
	res.json({ message: 'Protected route.' });
});

userRouter.post(
	'/login',
	validateBody(userSchema),
	catchAsync(userController.logInUser),
);
userRouter.post(
	'/register',
	validateBody(userSchema),
	userController.registerUser.bind(userController),
);

export default userRouter;
