import userController from '@/controllers/user.controller';
import catchAsync from '@/middlewares/catchAsync';
import doesExist from '@/middlewares/doesExist';
import { authenticate } from '@/middlewares/isLoggedIn';
import validateBody from '@/middlewares/validateBody';
import { userSchema } from '@/schemas/user.schema';
import { Router } from 'express';

const userRouter: Router = Router();

userRouter.route('/').get(catchAsync(userController.getAllUsers));

userRouter
	.route('/:id')
	.get(doesExist('user'), catchAsync(userController.getUserById))
	.delete(doesExist('user'), authenticate, userController.destroyTodo);

userRouter.post(
	'/register',
	validateBody(userSchema),
	userController.registerUser.bind(userController),
);

userRouter.post(
	'/login',
	validateBody(userSchema),
	catchAsync(userController.logInUser),
);

userRouter.get('/logout', userController.logoutUser);

userRouter.get('/protected-route', authenticate, (req, res) => {
	res.json({ message: 'Protected route.' });
});

export default userRouter;
