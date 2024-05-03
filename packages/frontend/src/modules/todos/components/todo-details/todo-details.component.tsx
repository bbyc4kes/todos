import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/css'; // Import css from Emotion
import todoService from '~modules/todos/services/http';
import { TTodoDetails } from './todo-details.types';
import {
	buttonStyles,
	descriptionStyles,
	listItemStyles,
	titleStyles,
} from './todo-details.styles';
import { Button } from '@blueprintjs/core';

const TodoDetails = ({
	id,
	title,
	description,
	isPublic,
	isCompleted,
}: TTodoDetails): React.ReactNode => {
	const [todoCompleteness, setTodoCompleteness] = useState(isCompleted);
	const navigate = useNavigate();

	const handleGetTodoById = (id: number): void => {
		navigate(`api/todos/${id}`);
	};

	const toggleCompleteness = async (id: number): Promise<void> => {
		await todoService.editCompleteness(id, {
			isCompleted: !todoCompleteness,
		});
		setTodoCompleteness(!todoCompleteness);
	};

	const handleDeleteTodo = async (id: number): Promise<void> => {
		await todoService.destroyTodo(id);
	};

	return (
		<div className={listItemStyles}>
			<h2 className={titleStyles}>{title}</h2>
			<h3 className={descriptionStyles}>{description}</h3>
			<p>{isPublic ? 'true' : 'false'}</p>
			<p>{todoCompleteness ? 'true' : 'false'}</p>
			<div style={{ display: 'flex', marginTop: '16px' }}>
				<button
					className={css`
						${buttonStyles}
					`}
					onClick={() => toggleCompleteness(id)}
				>
					Toggle Completeness
				</button>
				<Button
					className={css`
						${buttonStyles}
					`}
					onClick={() => handleGetTodoById(id)}
				>
					View todo
				</Button>
				<Button
					className={css`
						${buttonStyles}
					`}
					onClick={() => handleDeleteTodo(id)}
				>
					Delete todo
				</Button>
			</div>
		</div>
	);
};

export default TodoDetails;
