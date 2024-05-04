import React from 'react';
import { Field } from 'react-final-form';
import CustomButton from '~shared/components/button/button.component';
import {
	inputContainerStyles,
	checkboxContainerStyles,
	todoFormContainerStyles,
} from './todo-form.styles';

const AddTodoForm = ({ handleSubmit, type }): React.ReactNode => {
	const submitBtnText = type === 'edit' ? 'Edit' : 'Create';
	return (
		<form onSubmit={handleSubmit} className={todoFormContainerStyles}>
			<div className={inputContainerStyles}>
				<label>
					<b>Title</b>
				</label>
				<Field
					name="title"
					component="input"
					type="text"
					placeholder="Title"
				/>
			</div>
			<div className={inputContainerStyles}>
				<label>
					<b>Description</b>
				</label>
				<Field
					name="description"
					component="input"
					type="text"
					placeholder="Description"
				/>
			</div>
			<div className={checkboxContainerStyles}>
				<label>
					<Field
						name="isPublic"
						component="input"
						type="radio"
						value="true"
					/>
					Public
				</label>
				<label>
					<Field
						name="isPublic"
						component="input"
						type="radio"
						value="false"
					/>
					Private
				</label>
			</div>
			<div>
				<p>
					<b>Is the task completed?</b>
				</p>
				<div className={checkboxContainerStyles}>
					<label>
						<Field
							name="isCompleted"
							component="input"
							type="radio"
							value="true"
						/>
						Yes
					</label>
					<label>
						<Field
							name="isCompleted"
							component="input"
							type="radio"
							value="false"
						/>
						No
					</label>
				</div>
			</div>
			<CustomButton type="submit" text={submitBtnText} />
		</form>
	);
};

export default AddTodoForm;
