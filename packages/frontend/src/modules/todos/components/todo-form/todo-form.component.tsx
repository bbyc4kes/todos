import React from 'react';
import { Field } from 'react-final-form';
import CustomButton from '~shared/components/button/button.component';
import {
	inputContainerStyles,
	checkboxContainerStyles,
	todoFormContainerStyles,
	labelContainerStyles,
} from './todo-form.styles';

const AddTodoForm = ({ handleSubmit, type, todo = null }): React.ReactNode => {
	const submitBtnText = type === 'edit' ? 'Edit' : 'Create';
	return (
		<form onSubmit={handleSubmit} className={todoFormContainerStyles}>
			<div className={inputContainerStyles}>
				<label>
					<b>TITLE</b>
				</label>
				<Field
					name="title"
					component="input"
					type="text"
					defaultValue={todo?.title}
					placeholder="Title"
				/>
			</div>
			<div className={inputContainerStyles}>
				<label>
					<b>DESCRIPTION</b>
				</label>
				<Field
					name="description"
					component="input"
					type="text"
					defaultValue={todo?.description}
					placeholder="Description"
				/>
			</div>
			<div className={checkboxContainerStyles}>
				<label className={labelContainerStyles}>
					<Field
						name="isPublic"
						component="input"
						type="radio"
						value="true"
					/>
					<p style={{ margin: 0 }}>PUBLIC</p>
				</label>
				<label className={labelContainerStyles}>
					<Field
						name="isPublic"
						component="input"
						type="radio"
						value="false"
					/>
					<p style={{ margin: 0 }}>PRIVATE</p>
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
							type="radio"
							value="true"
						/>
						<p style={{ margin: 0 }}>YES</p>
					</label>
					<label className={labelContainerStyles}>
						<Field
							name="isCompleted"
							component="input"
							type="radio"
							value="false"
						/>
						<p style={{ margin: 0 }}>NO</p>
					</label>
				</div>
			</div>
			<CustomButton type="submit" text={submitBtnText} />
		</form>
	);
};

export default AddTodoForm;
