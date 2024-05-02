import userController from '@/controllers/user.controller';
import { Router, Request, Response } from 'express';

const userRouter: Router = Router();

userRouter.post('/register', async (_: Request, res: Response) => {
	res.send('Add registration logic there');
});
userRouter.post('/newUser', userController.createNewUser.bind(userController));

export default userRouter;
