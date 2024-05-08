import { Checkbox } from '@blueprintjs/core';
import React, { useMemo, useState } from 'react';
import { useTodoStore } from '~store/todos/todo.store';
import { paragraghTitleStyles } from './todo-switch.styles';
const TodoCheckbox = ({ id, ...props }: { id: number }): JSX.Element => {
	const { todos } = useTodoStore();

	const todo = useMemo(() => {
		return todos.find((todo) => todo.id === id);
	}, [todos, id]);

	const [todoCompleteness, setTodoCompleteness] = useState(todo.isCompleted);

	const toggleCompleteness = async (): Promise<void> => {
		setTodoCompleteness(!todoCompleteness);

		await useTodoStore.getState().updateCompleteness(id, {
			isCompleted: !todoCompleteness,
		});
	};
	return (
		<Checkbox
			onClick={toggleCompleteness}
			large={false}
			checked={todoCompleteness}
			className={paragraghTitleStyles}
			key={id}
			{...props}
		/>
	);
};

export default TodoCheckbox;
