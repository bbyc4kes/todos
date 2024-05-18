import { Todo } from '~store/todos/todo.store.types';
import { fetchTodoById } from './fetch-todo-by-id';

const fetchTodo = async (
	id: number,
	setTodo: React.Dispatch<React.SetStateAction<Todo | null>>,
): Promise<void> => {
	const todoById = await fetchTodoById(id);
	setTodo(todoById);
};

export default fetchTodo;
