import React, { useEffect } from 'react';
import { Form } from 'react-final-form';
import todoService from '~modules/todos/services/http';
import { useTodoStore } from '~store/todos/todo.store';
import AddTodoForm from '../todo-form/todo-form.component';
import TodoDetails from '../todo-details/todo-details.component';
import {
	containerStyles,
	listStyles,
	contentContainer,
	buttonFormStyles,
	addNewTodoStyles,
	newTodoTitleStyles,
	todosContainerStyles,
	addNewTodoContainerStyles,
} from './todo-list.styles';
import { Dialog } from '@blueprintjs/core';
import { useModal } from '~shared/hooks/use-modal/use-modal.hook';
import CustomButton from '~shared/components/button/button.component';
import { CirclePlusIcon } from 'lucide-react';

const TodoList = (): React.ReactNode => {
	const todos = useTodoStore((state) => state.todos);
	const { isOpen, openModal, closeModal } = useModal();

	useEffect(() => {
		todoService.getAllTodos();
	}, []);

	const onSubmit = async (data): Promise<void> => {
		const isCompleted = data.isCompleted === 'true';
		const isPublic = data.isPublic === 'true';

		const todoData = {
			...data,
			isCompleted,
			isPublic,
		};

		await todoService.createTodo(todoData);
		closeModal();
	};

	return (
		<div className={containerStyles}>
			<div className={contentContainer}>
				<section className={todosContainerStyles}>
					<ul className={listStyles}>
						{todos?.map((todo) => (
							<li key={todo.id}>
								<TodoDetails {...todo} />
							</li>
						))}
					</ul>
				</section>
				<section className={addNewTodoContainerStyles}>
					<div className={addNewTodoStyles}>
						<h2 className={newTodoTitleStyles}>Add New Task!</h2>
						<p>
							Make your time management easier with our Todo app!
						</p>
						<CustomButton
							text="Add"
							onClick={openModal}
							extraButtonStyles={buttonFormStyles}
							icon={<CirclePlusIcon />}
						/>
					</div>
				</section>
				<Dialog
					isOpen={isOpen}
					onClose={closeModal}
					isCloseButtonShown={true}
					title="Create Your Todo"
				>
					<Form
						onSubmit={onSubmit}
						render={(props) => (
							<AddTodoForm {...props} type="submit" />
						)}
					/>
				</Dialog>
			</div>
		</div>
	);
};

export default TodoList;
