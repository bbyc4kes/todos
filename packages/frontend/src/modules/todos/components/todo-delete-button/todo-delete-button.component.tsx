import React from 'react';
import { useTodoStore } from '~store/todos/todo.store';
import CustomButton from '~shared/components/button/button.component';
import { deleteButtonStyles } from './todo-delete-button';

export default function DeleteButton({ id }): React.JSX.Element {
	const { destroyTodo } = useTodoStore();
	return (
		<CustomButton
			extraButtonStyles={deleteButtonStyles}
			onClick={() => destroyTodo(id)}
			text="Delete"
		/>
	);
}
