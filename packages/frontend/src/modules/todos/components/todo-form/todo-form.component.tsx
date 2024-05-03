import { Button } from '@blueprintjs/core';
import React from 'react';
import { Field } from 'react-final-form';

const AddTodoForm = ({ handleSubmit }): React.ReactNode => (
	<form
		onSubmit={handleSubmit}
		style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
	>
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
		<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
		<div>
			<label>
				<Field
					name="isPublic"
					component="input"
					type="radio"
					value="true"
				/>
				Private
			</label>
			<label>
				<Field
					name="isPublic"
					component="input"
					type="radio"
					value="false"
				/>
				Public
			</label>
		</div>
		<div>
			<p>
				<b>Is the task completed?</b>
			</p>
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
		<Button type="submit">Add Todo</Button>
	</form>
);

export default AddTodoForm;
