import { TExpressFunction } from '@/types/todos.type';
import todoService from '@/services/todo.service';

class TodoController {
	getAllTodos: TExpressFunction = async (req, res) => {
		const todos = await todoService.findAll();
		return res.json(todos);
	};

	getTodoById: TExpressFunction = async (req, res) => {
		const { id } = req.params;

		const parsedId = parseFloat(id);
		const todo = await todoService.findById(parsedId);

		return res.json(todo);
	};

	addNewTodo: TExpressFunction = async (req, res) => {
		const todoData = req.body;
		const newTodo = await todoService.create(todoData);
		return res.json(newTodo);
	};

	updateTodo: TExpressFunction = async (req, res) => {
		const { id } = req.params;

		const parsedId = parseFloat(id);
		const todoData = req.body;
		const updatedTodo = await todoService.update(parsedId, todoData);
		return res.json(updatedTodo);
	};

	destroyTodo: TExpressFunction = async (req, res) => {
		const { id } = req.params;

		const parsedId = parseFloat(id);
		const deletedTodo = await todoService.destroy(parsedId);

		return res.json(deletedTodo);
	};

	updateCompleteness: TExpressFunction = async (req, res) => {
		const { id } = req.params;
		const { isCompleted } = req.query;

		if (typeof isCompleted !== 'string') {
			return res
				.status(400)
				.json({ error: 'isCompleted must be a string' });
		}

		const parsedId = parseFloat(id);
		const todoIsCompleted = isCompleted === 'true';

		const updatedTodo = await todoService.updateIsComplete(
			parsedId,
			todoIsCompleted,
		);

		return res.json(updatedTodo);
	};

	updatePrivacy: TExpressFunction = async (req, res) => {
		const { id } = req.params;
		const { isPublic } = req.query;

		const parsedId = parseFloat(id);
		const todoIsPublic = isPublic === 'true';

		const updatedTodo = await todoService.updateIsPublic(
			parsedId,
			todoIsPublic,
		);

		return res.json(updatedTodo);
	};
}

export default new TodoController();
