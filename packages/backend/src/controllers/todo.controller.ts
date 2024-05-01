import todoService from '@/services/todo.service';
import { ExpressFuncitonType } from '@/types/todos.type';

const getAllTodos: ExpressFuncitonType = async (req, res) => {
	const todos = await todoService.findAll();
	return res.json(todos);
};

const getTodoById: ExpressFuncitonType = async (req, res) => {
	const { id } = req.params;

	const parsedId = parseFloat(id);
	const todo = await todoService.findById(parsedId);

	return res.json(todo);
};

const addNewTodo: ExpressFuncitonType = async (req, res) => {
	const todoData = req.body;
	const newTodo = await todoService.create(todoData);
	return res.json(newTodo);
};

const updateTodo: ExpressFuncitonType = async (req, res) => {
	const { id } = req.params;

	const parsedId = parseFloat(id);
	const todoData = req.body;
	const updatedTodo = await todoService.update(parsedId, todoData);
	return res.json(updatedTodo);
};

const destroyTodo: ExpressFuncitonType = async (req, res) => {
	const { id } = req.params;

	const parsedId = parseFloat(id);
	const deletedTodo = await todoService.destroy(parsedId);

	return res.json(deletedTodo);
};

const updateCompleteness: ExpressFuncitonType = async (req, res) => {
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

const updatePrivacy: ExpressFuncitonType = async (req, res) => {
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

export default {
	getAllTodos,
	getTodoById,
	addNewTodo,
	updateTodo,
	updateCompleteness,
	updatePrivacy,
	destroyTodo,
};
