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
	.get(doesExist('findById'), catchAsync(todoController.getTodoById))
	.put(
		doesExist('update'),
		validateBody(todoSchema),
		catchAsync(todoController.updateTodo),
	)
	.patch(
		doesExist('updateIsComplete'),
		validateBody(todoSchema),
		catchAsync(todoController.updateCompleteness),
	)
	.delete(doesExist('destroy'), catchAsync(todoController.destroyTodo));

todosRouter.patch(
	'/:id/privacy',
	doesExist('updateIsPublic'),
	validateBody(todoSchema),
	catchAsync(todoController.updatePrivacy),
);

export default todosRouter;
