import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import todoService from '~modules/todos/services/http';
import { TTodoDetails } from './todo-details.types';
import {
	buttonStyles,
	deleteButtonStyles,
	descriptionStyles,
	listItemStyles,
	titleStyles,
	detailsContainerStyles,
	buttonsContainerStyles,
	completenessContainer,
} from './todo-details.styles';
import CustomButton from '~shared/components/button/button.component';
import { ROUTER_KEYS } from '~shared/keys';
import { truncateText } from '~shared/utils/truncate-text';
import { Switch } from '@blueprintjs/core';

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
		navigate(`${ROUTER_KEYS.TODO_LIST}/${id}`);
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
			<section className={detailsContainerStyles}>
				<h2 className={titleStyles}>
					Title:
					<br /> {title}
				</h2>
				<h3 className={descriptionStyles}>
					Description:
					<br /> {truncateText(description, 10)}
				</h3>
				<p>Publicity: {isPublic ? 'public' : 'private'}</p>
				<div className={completenessContainer}>
					<p style={{ marginRight: '10px' }}>
						Completed: {todoCompleteness ? 'yes' : 'no'}
					</p>
					<Switch
						onClick={() => toggleCompleteness(id)}
						large={true}
						defaultChecked={todoCompleteness}
					/>
				</div>
			</section>
			<section className={buttonsContainerStyles}>
				<CustomButton
					extraButtonStyles={buttonStyles}
					onClick={() => handleGetTodoById(id)}
					text="View Todo"
					type="button"
				/>

				<CustomButton
					extraButtonStyles={deleteButtonStyles}
					onClick={() => handleDeleteTodo(id)}
					text="Delete Todo"
				/>
			</section>
		</div>
	);
};

export default TodoDetails;
