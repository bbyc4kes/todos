import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TTodoDetails } from './todo-details.types';
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
} from './todo-details.styles';
import CustomButton from '~shared/components/button/button.component';
import { ROUTER_KEYS } from '~shared/keys';
import { truncateText } from '~shared/utils/truncate-text';
import DeleteButton from '../todo-delete-button/todo-delete-button.component';
import TodoCheckbox from '../todo-switch/todo-switch.component';

const TodoDetails = ({
	id,
	title,
	description,
	isPublic,
}: TTodoDetails): React.ReactNode => {
	const navigate = useNavigate();

	const handleGetTodoById = (): void => {
		navigate(`${ROUTER_KEYS.TODOS}/${id}`);
	};

	return (
		<div className={listItemStyles}>
			<section className={detailsContainerStyles}>
				<div>
					<h3 className={titleStyles}>TITLE:</h3>
					<p className={textStyles}>{truncateText(title, 10)}</p>
				</div>
				<div>
					<h3 className={descriptionStyles}>DESCRIPTION:</h3>

					<p className={textStyles}>
						{truncateText(description, 10)}
					</p>
				</div>
				<div>
					<h3 className={descriptionStyles}>PUBLICITY:</h3>
					<p className={textStyles}>
						{isPublic ? 'public' : 'private'}
					</p>
				</div>
				<div className={completenessContainer}>
					<h3 className={completedStyles}>COMPLETED:</h3>
					<TodoCheckbox id={id} />
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
