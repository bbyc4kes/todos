import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodoDetails } from './todo-details.types';
import {
	buttonStyles,
	descriptionStyles,
	listItemStyles,
	titleStyles,
	detailsContainerStyles,
	buttonsContainerStyles,
	completenessContainer,
	textStyles,
	completedStyles,
	checkboxStyles,
} from './todo-details.styles';
import CustomButton from '~shared/components/button/button.component';
import { ROUTER_KEYS } from '~shared/keys';
import DeleteButton from '../todo-delete-button/todo-delete-button.component';
import { TodoVisibility } from '~modules/todos/containers/todo-details/todo-details.types';
import { Checkbox } from '@blueprintjs/core';

const TodoDetails = ({
	id,
	title,
	description,
	isCompleted,
	isPublic,
}: ITodoDetails): React.ReactNode => {
	const navigate = useNavigate();

	const handleGetTodoById = (): void => {
		navigate(`${ROUTER_KEYS.TODOS}/${id}`);
	};

	return (
		<div className={listItemStyles}>
			<section className={detailsContainerStyles}>
				<div>
					<h3 className={titleStyles}>TITLE:</h3>
					<p className={textStyles}>{title}</p>
				</div>
				<div>
					<h3 className={descriptionStyles}>DESCRIPTION:</h3>

					<p className={textStyles}>{description}</p>
				</div>
				<div>
					<h3 className={descriptionStyles}>PUBLICITY:</h3>
					<p className={textStyles}>
						{isPublic
							? TodoVisibility.PUBLIC
							: TodoVisibility.PRIVATE}
					</p>
				</div>
				<div className={completenessContainer}>
					<h3 className={completedStyles}>COMPLETED:</h3>
					<Checkbox
						large={false}
						className={checkboxStyles}
						disabled
						checked={isCompleted}
					/>
				</div>
			</section>
			<section className={buttonsContainerStyles}>
				<CustomButton
					extraButtonStyles={buttonStyles}
					onClick={handleGetTodoById}
					text="View"
					type="button"
				/>

				<DeleteButton id={id} />
			</section>
		</div>
	);
};

export default TodoDetails;
