import { useTodoStore } from '~store/todos/todo.store';
import { Todo } from '~store/todos/todo.store.types';

export const fetchTodoById = async (todoId: number): Promise<Todo | null> => {
	await useTodoStore.getState().getTodoById(todoId);
	const todoById = useTodoStore.getState().todoById;

	return todoById;
};
