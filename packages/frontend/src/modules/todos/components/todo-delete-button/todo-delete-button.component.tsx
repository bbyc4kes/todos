import React from 'react';
import CustomButton from '~shared/components/button/button.component';
import { deleteButtonStyles } from './todo-delete-button.styles';
import { useTodoStore } from '~store/todos/todo.store';

export default function DeleteButton({
	id,
}: {
	id: number;
}): React.JSX.Element {
	const handleDeletion = (): void => {
		useTodoStore.getState().destroyTodo(id);
	};

	return (
		<CustomButton
			extraButtonStyles={deleteButtonStyles}
			onClick={handleDeletion}
			text="Delete"
		/>
	);
}
