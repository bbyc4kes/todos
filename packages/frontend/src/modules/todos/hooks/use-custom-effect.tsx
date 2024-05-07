import { useEffect } from 'react';

export const useCustomEffect = (
	setIsPublic,
	setIsCompleted,
	setTodo,
	fetchFunction,
): void => {
	useEffect(() => {
		const fetchTodo = async (): Promise<void> => {
			const newData = await fetchFunction();
			setTodo(newData);
			setIsPublic(newData.isPrivate);
			setIsCompleted(newData.completed);
		};
		fetchTodo();
	}, []);
};
