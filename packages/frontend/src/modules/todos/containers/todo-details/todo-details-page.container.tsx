import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useModal } from '~shared/hooks/use-modal/use-modal.hook';

import { Form } from 'react-final-form';
import { Button, Checkbox, Dialog, Switch } from '@blueprintjs/core';
import { ROUTER_KEYS } from '~shared/keys';
import {
	buttonGroupContainerStyles,
	checkboxGroupContainerStyles,
	contentContainerStyles,
	headingContainerStyles,
	mainContainerStyles,
	paragraphContainerStyles,
	switchStyles,
	titleContainerStyles,
} from './todo-details.styles';
import Layout from '~shared/layouts/layout';
import {
	CircleCheckBigIcon,
	KeyRoundIcon,
	NotebookPenIcon,
	Text,
} from 'lucide-react';
import AddTodoForm from '../../components/todo-form/todo-form.component';
import { Todo } from '~store/todos/todo.store.types';
import { useTodoStore } from '~store/todos/todo.store';
import { TodoCompleteness, TodoVisibility } from './todo-details.types';
import { fetchTodoById } from '~modules/todos/hooks/fetch-todo-by-id';
import { useFetchEffect } from '~modules/todos/hooks/use-fetch-effect';

const TodoDetailsPage = (): React.ReactNode => {
	const { isOpen, openModal, closeModal } = useModal();
	const { id } = useParams();
	const parsedId = parseFloat(id);
	const navigate = useNavigate();

	const todo = useFetchEffect(parsedId);
	const handleEditing = async (data: Todo): Promise<void> => {
		const isPublic = data.isPublic;
		const isCompleted = data.isCompleted;
		const todoData = {
			...data,
			isPublic,
			isCompleted,
		};

		closeModal();
		await useTodoStore.getState().updateTodo(parsedId, todoData);
		handleGoBack();
	};

	const toggleCompleteness = async (): Promise<void> => {
		const toggledCompleteness = !todo.isCompleted;

		await useTodoStore
			.getState()
			.updateCompleteness(parsedId, { isCompleted: toggledCompleteness });

		await fetchTodoById(parsedId);
	};

	const togglePublicity = async (): Promise<void> => {
		const toggledPrivacy = !todo.isPublic;

		await useTodoStore
			.getState()
			.updatePublicity(parsedId, { isPublic: toggledPrivacy });

		await fetchTodoById(parsedId);
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
							<h2 className={headingContainerStyles}>
								<NotebookPenIcon />
								TODO TITLE: <br />
							</h2>
							<p className={paragraphContainerStyles}>
								{todo.title ?? ''}
							</p>
						</div>
						<div>
							<h2 className={headingContainerStyles}>
								<Text />
								DESCRIPTION: <br />
							</h2>
							<p className={paragraphContainerStyles}>
								{todo.description ?? ''}
							</p>
						</div>
					</section>
					<section className={checkboxGroupContainerStyles}>
						<div>
							<h2 className={headingContainerStyles}>
								<KeyRoundIcon />
								PUBLICITY:
							</h2>
							<p className={paragraphContainerStyles}>
								{todo?.isPublic
									? TodoVisibility.PUBLIC
									: TodoVisibility.PRIVATE}
								<Switch
									onClick={togglePublicity}
									className={switchStyles}
									disabled
									large={true}
									checked={todo?.isPublic}
								/>
							</p>
						</div>
						<div>
							<h2 className={headingContainerStyles}>
								<CircleCheckBigIcon />
								COMPLETENESS:
							</h2>
							<p className={paragraphContainerStyles}>
								{todo?.isCompleted
									? TodoCompleteness.COMPLETE
									: TodoCompleteness.NOT_COMPLETE}
								<Checkbox
									onChange={toggleCompleteness}
									large={true}
									disabled
									className={switchStyles}
									checked={todo?.isCompleted}
								/>
							</p>
						</div>
					</section>
					<section className={buttonGroupContainerStyles}>
						<Button
							text="BACK"
							onClick={handleGoBack}
							icon="arrow-left"
						/>
						<Button
							onClick={openModal}
							text="EDIT"
							type="button"
							icon="edit"
						/>
					</section>
					<Dialog
						isOpen={isOpen}
						onClose={closeModal}
						isCloseButtonShown={true}
						title="EDIT TODO"
					>
						<Form
							onSubmit={handleEditing}
							render={(props) => (
								<AddTodoForm
									{...props}
									type="edit"
									todo={todo}
								/>
							)}
						/>
					</Dialog>
				</div>
			</div>
		</Layout>
	);
};

export default TodoDetailsPage;
