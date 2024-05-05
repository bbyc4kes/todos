import React from 'react';
import {
	addNewTodoContainerStyles,
	addNewTodoStyles,
	buttonFormStyles,
	newTodoTitleStyles,
} from './todo-add.styles';
import CustomButton from '~shared/components/button/button.component';
import { CirclePlusIcon } from 'lucide-react';

const TodoAdd = ({ openModal, icon = <CirclePlusIcon /> }): JSX.Element => {
	return (
		<section className={addNewTodoContainerStyles}>
			<div className={addNewTodoStyles}>
				<h2 className={newTodoTitleStyles}>Add New Task!</h2>
				<p>Make your time management easier with our Todo app!</p>
				<CustomButton
					text="Add"
					onClick={openModal}
					extraButtonStyles={buttonFormStyles}
					icon={icon}
				/>
			</div>
		</section>
	);
};

export default TodoAdd;
