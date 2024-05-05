import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useModal } from '~shared/hooks/use-modal/use-modal.hook';

import { Form } from 'react-final-form';
import { Button, Checkbox, Dialog, Switch } from '@blueprintjs/core';
import { useTodoStore } from '~store/todos/todo.store';
import todoService from '../../services/http';
import { ROUTER_KEYS } from '~shared/keys';
import {
	buttonGroupContainerStyles,
	checkboxGroupContainerStyles,
	contentContainerStyles,
	headingContainerStyles,
	mainContainerStyles,
	paragraphContainerStyles,
	titleContainerStyles,
} from './todo-details.styles';
import Layout from '~shared/layouts/layout';
import {
	CircleCheckBigIcon,
	KeyRoundIcon,
	NotebookPenIcon,
	Text,
} from 'lucide-react';
import { truncateText } from '~shared/utils/truncate-text';
import AddTodoForm from '../../components/todo-form/todo-form.component';

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

		setIsPublic(todo?.isPublic);
		setIsCompleted(todo?.isCompleted);
	}, [id, todo]);

	const handleEditing = async (data): Promise<void> => {
		const isPublic = data.isPublic === 'true';
		const isCompleted = data.isCompleted === 'true';

		const todoData = {
			...data,
			isPublic,
			isCompleted,
		};

		await todoService.editTodo(parsedId, todoData);
		await todoService.getTodoById(parsedId);

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
							<h2 className={headingContainerStyles}>
								<NotebookPenIcon />
								TODO TITLE: <br />
							</h2>
							<p className={paragraphContainerStyles}>
								{todo
									? truncateText(todo?.title, 20)
									: todo?.title}
							</p>
						</div>
						<div>
							<h2 className={headingContainerStyles}>
								<Text />
								DESCRIPTION: <br />
							</h2>
							<p className={paragraphContainerStyles}>
								{todo
									? truncateText(todo?.description, 20)
									: todo?.description}
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
								{todo?.isPublic ? 'Public' : 'Private'}
								<Switch
									onClick={togglePrivacy}
									style={{
										marginBottom: '0',
										position: 'absolute',
										right: 0,
									}}
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
									? 'Completed'
									: 'Not Completed'}
								<Checkbox
									onChange={toggleCompleteness}
									large={true}
									disabled
									style={{
										marginBottom: '0',
										position: 'absolute',
										right: 0,
									}}
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
