import { useEffect, useState } from 'react';
import { Todo } from '~store/todos/todo.store.types';
import { fetchTodoById } from './fetch-todo-by-id';

export const useFetchEffect = (id: number): Todo => {
	const [todo, setTodo] = useState<Todo | null>(null);

	const fetchTodo = async (): Promise<void> => {
		const todoById = await fetchTodoById(id);
		setTodo(todoById);
	};

	useEffect(() => {
		fetchTodo();
	}, []);

	return { ...todo };
};
