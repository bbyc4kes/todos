import React from 'react';
import todoService from '~modules/todos/services/http';
import TodoAdd from '../todo-add/todo-add.component';
import TodoDialog from '../todo-dialog/todo-dialog.component';
import { useModal } from '~shared/hooks/use-modal/use-modal.hook';

const TodoAddSection = ({ children }): JSX.Element => {
	const { closeModal, isOpen, openModal } = useModal();

	const onSubmit = async (data): Promise<void> => {
		const isCompleted = data.isCompleted;
		const isPublic = data.isPublic;

		const todoData = {
			...data,
			isCompleted,
			isPublic,
		};

		await todoService.createTodo(todoData);
		closeModal();
	};

	return (
		<>
			<TodoAdd openModal={openModal} />
			{children}
			<TodoDialog
				closeModal={closeModal}
				isOpen={isOpen}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export default TodoAddSection;