import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(_: Request, res: Response): Promise<void> {
		try {
			const todos = await this.todoService.findAll();
			res.json(todos);
		} catch (error) {
			console.error('Error fetching todos:', error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
