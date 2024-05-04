import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useModal } from '~shared/hooks/use-modal/use-modal.hook';

import { Form } from 'react-final-form';
import { Button, Dialog, Switch } from '@blueprintjs/core';
import TodoForm from '../../components/todo-form/todo-form.component';
import { useTodoStore } from '~store/todos/todo.store';
import todoService from '../../services/http';
import { ROUTER_KEYS } from '~shared/keys';
import {
	buttonGroupContainerStyles,
	checkboxGroupContainerStyles,
	contentContainerStyles,
	mainContainerStyles,
	titleContainerStyles,
} from './todo-details.styles';
import Layout from '~shared/layouts/layout';

const TodoDetailsPage = (): React.ReactNode => {
	const { isOpen, openModal, closeModal } = useModal();
	const { id } = useParams();

	const todo = useTodoStore((state) => state.todoById);
	const navigate = useNavigate();

	const [isPublic, setIsPublic] = useState(todo?.isPublic);
	const [isCompleted, setIsCompleted] = useState(todo?.isCompleted);

	const parsedId = parseFloat(id);

	useEffect(() => {
		todoService.getAllTodos();
		todoService.getTodoById(parsedId);
	}, [id]);

	const handleEditing = async (data): Promise<void> => {
		const isPublic = data.isPublic === 'true';
		const isCompleted = data.isCompleted === 'true';

		const todoData = {
			...data,
			isPublic,
			isCompleted,
		};

		await todoService.editTodo(parsedId, todoData);

		setTimeout(async () => {
			await todoService.getAllTodos();
		}, 50);

		closeModal();
	};

	const toggleCompleteness = async (): Promise<void> => {
		const toggledCompleteness = !isCompleted;

		await todoService.editCompleteness(parsedId, {
			isCompleted: toggledCompleteness,
		});
		await todoService.getAllTodos();

		setIsCompleted(toggledCompleteness);
	};

	const togglePrivacy = async (): Promise<void> => {
		const toggledPrivacy = !isPublic;

		await todoService.editPrivacy(parsedId, {
			isPublic: toggledPrivacy,
		});
		await todoService.getAllTodos();

		setIsPublic(toggledPrivacy);
	};

	const handleGoBack = (): void => {
		navigate(`${ROUTER_KEYS.ROOT}`);
	};

	return (
		<Layout>
			<div className={mainContainerStyles}>
				<div className={contentContainerStyles}>
					<section className={titleContainerStyles}>
						<div>
							<h2>Todo title: {todo?.title}</h2>
						</div>
						<div>
							<p>Description: {todo?.description}</p>
						</div>
					</section>
					<section className={checkboxGroupContainerStyles}>
						<div>
							Publicity: {todo?.isPublic ? 'public' : 'private'}
							<Switch
								onClick={togglePrivacy}
								large={true}
								defaultChecked={todo?.isPublic}
							/>
						</div>
						<div>
							Completeness:{' '}
							{todo?.isCompleted ? 'completed' : 'not completed'}
							<Switch
								onClick={toggleCompleteness}
								large={true}
								defaultChecked={todo?.isCompleted}
							/>
						</div>
					</section>
					<section className={buttonGroupContainerStyles}>
						<Button
							text="Back"
							onClick={handleGoBack}
							icon="arrow-left"
						/>
						<Button
							onClick={openModal}
							text="Edit"
							type="button"
							icon="edit"
						/>
					</section>
					<Dialog
						isOpen={isOpen}
						onClose={closeModal}
						isCloseButtonShown={true}
						title="Edit your todo"
					>
						<Form
							onSubmit={handleEditing}
							render={(props) => (
								<TodoForm {...props} type="edit" />
							)}
						/>
					</Dialog>
				</div>
			</div>
		</Layout>
	);
};

export default TodoDetailsPage;
