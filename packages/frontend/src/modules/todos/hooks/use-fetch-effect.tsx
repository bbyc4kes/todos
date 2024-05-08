import { useEffect, useState } from 'react';
import { useTodoStore } from '~store/todos/todo.store';
import { Todo } from '~store/todos/todo.store.types';

export const useFetchEffect = (fetchFunction): Todo => {
	const [todo, setTodo] = useState<Todo | null>(null);

	const fetchTodo = async (): Promise<void> => {
		await fetchFunction();
		const todoById = useTodoStore.getState().todoById;
		setTodo(todoById);
	};

	useEffect(() => {
		fetchTodo();
	}, []);

	return { ...todo };
};
