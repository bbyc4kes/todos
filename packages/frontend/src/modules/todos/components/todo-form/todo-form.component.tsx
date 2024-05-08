import React from 'react';
import CustomButton from '~shared/components/button/button.component';
import {
	checkboxContainerStyles,
	todoFormContainerStyles,
	labelContainerStyles,
	inputContainerStyles,
	paragraghTitleStyles,
} from './todo-form.styles';
import TodoFieledInput from '../todo-field-input/todo-field-input.component';
import { Field } from 'react-final-form';
import { validateField } from '~shared/utils/validate-field';

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
					validate={validateField}
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
					validate={validateField}
					placeholder="Description"
				/>
			</div>
			<p className={paragraghTitleStyles}>
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
					<p className={paragraghTitleStyles}>Yes, make it Public</p>
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
						<p className={paragraghTitleStyles}>Yes</p>
					</label>
				</div>
			</div>
			<CustomButton type="submit" text={submitBtnText} />
		</form>
	);
};

export default AddTodoForm;
