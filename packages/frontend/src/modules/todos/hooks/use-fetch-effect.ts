import { useEffect, useState } from 'react';
import { Todo } from '~store/todos/todo.store.types';
import fetchTodo from './fetch-todo';

export const useFetchEffect = (id: number): Todo => {
	const [todo, setTodo] = useState<Todo | null>(null);

	useEffect(() => {
		fetchTodo(id, setTodo);

		return () => {
			setTodo(null);
		};
	}, [id]);

	return { ...todo };
};
