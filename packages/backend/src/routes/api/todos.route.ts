import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import catchAsync from '@/middlewares/catchAsync';
import doesExist from '@/middlewares/doesExist';
import validateBody from '@/middlewares/validateBody';
import { todoSchema } from '@/schemas/todo.schema';

const todosRouter: Router = Router();

todosRouter
	.route('/')
	.get(catchAsync(todoController.getAllTodos))
	.post(validateBody(todoSchema), catchAsync(todoController.addNewTodo));

todosRouter
	.route('/:id')
	.get(doesExist('todo'), catchAsync(todoController.getTodoById))
	.put(
		doesExist('todo'),
		validateBody(todoSchema),
		catchAsync(todoController.updateTodo),
	)
	.patch(
		doesExist('todo'),
		catchAsync(todoController.updateCompleteness),
	)
	.delete(doesExist('todo'), catchAsync(todoController.destroyTodo));

todosRouter.patch(
	'/:id/privacy',
	doesExist('todo'),
	catchAsync(todoController.updatePrivacy),
);

export default todosRouter;
