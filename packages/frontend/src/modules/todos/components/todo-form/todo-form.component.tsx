import React from 'react';
import CustomButton from '~shared/components/button/button.component';
import {
	checkboxContainerStyles,
	todoFormContainerStyles,
	labelContainerStyles,
	inputContainerStyles,
} from './todo-form.styles';
import validator from 'validator';
import TodoFieledInput from '../todo-field-input/todo-field-input.component';
import { Field } from 'react-final-form';

const AddTodoForm = ({ handleSubmit, type, todo = null }): React.ReactNode => {
	const submitBtnText = type === 'edit' ? 'Edit' : 'Create';
	return (
		<form onSubmit={handleSubmit} className={todoFormContainerStyles}>
			<label>
				<b>TITLE</b>
			</label>
			<div className={inputContainerStyles}>
				<TodoFieledInput
					name="title"
					component="input"
					type="text"
					defaultValue={todo?.title}
					validate={(value): string | boolean =>
						!validator.isLength(value || '', {
							min: 1,
							max: 20,
						}) && 'Title must be from 1 to 20 characters long.'
					}
					placeholder="Title"
				/>
			</div>
			<div className={inputContainerStyles}>
				<label>
					<b>DESCRIPTION</b>
				</label>
				<TodoFieledInput
					name="description"
					component="input"
					type="text"
					defaultValue={todo?.description}
					validate={(value) =>
						!validator.isAlphanumeric(value || '') &&
						'Please provide a valid description.'
					}
					placeholder="Description"
				/>
			</div>
			<p style={{ margin: 0 }}>
				<b>IS IT PUBLIC?</b>
			</p>
			<div className={checkboxContainerStyles}>
				<label className={labelContainerStyles}>
					<Field
						name="isPublic"
						component="input"
						type="checkbox"
						className={labelContainerStyles}
						initialValue={todo?.isPublic}
					/>
					<p style={{ margin: 0 }}>Yes, make it Public</p>
				</label>
			</div>
			<div>
				<p>
					<b>IS THE TASK COMPLETED?</b>
				</p>
				<div className={checkboxContainerStyles}>
					<label className={labelContainerStyles}>
						<Field
							name="isCompleted"
							component="input"
							type="checkbox"
							className={labelContainerStyles}
							initialValue={todo?.isCompleted}
						/>
						<p style={{ margin: 0 }}>Yes</p>
					</label>
				</div>
			</div>
			<CustomButton type="submit" text={submitBtnText} />
		</form>
	);
};

export default AddTodoForm;
