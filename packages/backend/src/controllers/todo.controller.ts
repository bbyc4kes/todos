import { ExpressFunctionType } from '@/types/todos.type';
import todoService from '@/services/todo.service';

class TodoController {
	getAllTodos: ExpressFunctionType = async (req, res) => {
		const todos = await todoService.findAll();
		return res.json(todos);
	};

	getTodoById: ExpressFunctionType = async (req, res) => {
		const { id } = req.params;

		const parsedId = parseFloat(id);
		const todo = await todoService.findById(parsedId);

		return res.json(todo);
	};

	addNewTodo: ExpressFunctionType = async (req, res) => {
		const todoData = req.body;
		const newTodo = await todoService.create(todoData);
		return res.json(newTodo);
	};

	updateTodo: ExpressFunctionType = async (req, res) => {
		const { id } = req.params;

		const parsedId = parseFloat(id);
		const todoData = req.body;
		const updatedTodo = await todoService.update(parsedId, todoData);
		return res.json(updatedTodo);
	};

	destroyTodo: ExpressFunctionType = async (req, res) => {
		const { id } = req.params;

		const parsedId = parseFloat(id);
		const deletedTodo = await todoService.destroy(parsedId);

		return res.json(deletedTodo);
	};

	updateCompleteness: ExpressFunctionType = async (req, res) => {
		const { id } = req.params;
		const { isCompleted } = req.query;

		const parsedId = parseFloat(id);
		const todoIsCompleted = isCompleted === 'true';

		const updatedTodo = await todoService.updateIsComplete(
			parsedId,
			todoIsCompleted,
		);

		return res.json(updatedTodo);
	};

	updatePrivacy: ExpressFunctionType = async (req, res) => {
		const { id } = req.params;
		const { isPrivate } = req.query;

		const parsedId = parseFloat(id);
		const todoIsPrivate = isPrivate === 'true';

		const updatedTodo = await todoService.updateIsPublic(
			parsedId,
			todoIsPrivate,
		);

		return res.json(updatedTodo);
	};
}

export default new TodoController();
