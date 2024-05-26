import { Checkbox } from '@blueprintjs/core';
import React, { useCallback, useMemo } from 'react';
import { useTodoStore } from '~store/todos/todo.store';
import { paragraghTitleStyles } from './todo-switch.styles';

const TodoCheckbox = ({ id, ...props }: { id: number }): JSX.Element => {
	const { todos, updateCompleteness } = useTodoStore();

	const todo = useMemo(() => {
		return todos.find((todo) => todo.id === id);
	}, [todos, id]);

	const toggleCompleteness = useCallback(async (): Promise<void> => {
		await updateCompleteness(id, {
			isCompleted: !todo.isCompleted,
		});
	}, [id, todo, updateCompleteness]);
	return (
		<Checkbox
			onChange={toggleCompleteness}
			large={false}
			checked={todo.isCompleted}
			className={paragraghTitleStyles}
			key={id}
			{...props}
		/>
	);
};

export default TodoCheckbox;
