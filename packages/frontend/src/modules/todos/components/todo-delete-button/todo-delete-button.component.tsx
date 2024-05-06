import React from 'react';
import { useTodoStore } from '~store/todos/todo.store';
import CustomButton from '~shared/components/button/button.component';
import { deleteButtonStyles } from './todo-delete-button.styles';

export default function DeleteButton({
	id,
}: {
	id: number;
}): React.JSX.Element {
	const { destroyTodo } = useTodoStore();

	const handleDeletion = (): void => {
		destroyTodo(id);
	};

	return (
		<CustomButton
			extraButtonStyles={deleteButtonStyles}
			onClick={handleDeletion}
			text="Delete"
		/>
	);
}
