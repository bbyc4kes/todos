import { Dialog } from '@blueprintjs/core';
import React from 'react';
import { Form } from 'react-final-form';
import AddTodoForm from '../todo-form/todo-form.component';

const TodoDialog = ({ isOpen, closeModal, onSubmit }): JSX.Element => {
	return (
		<Dialog
			isOpen={isOpen}
			onClose={closeModal}
			isCloseButtonShown={true}
			title="CREATE TODO"
		>
			<Form
				onSubmit={onSubmit}
				render={(props) => <AddTodoForm {...props} type="submit" />}
			/>
		</Dialog>
	);
};

export default TodoDialog;
