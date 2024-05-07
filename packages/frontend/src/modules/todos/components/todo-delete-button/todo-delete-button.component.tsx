import React from 'react';
import CustomButton from '~shared/components/button/button.component';
import { deleteButtonStyles } from './todo-delete-button.styles';
import todoService from '~modules/todos/services/http';

export default function DeleteButton({
	id,
}: {
	id: number;
}): React.JSX.Element {
	const handleDeletion = (): void => {
		todoService.destroyTodo(id);
	};

	return (
		<CustomButton
			extraButtonStyles={deleteButtonStyles}
			onClick={handleDeletion}
			text="Delete"
		/>
	);
}
