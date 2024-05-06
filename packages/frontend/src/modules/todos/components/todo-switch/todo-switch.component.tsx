import { Checkbox } from '@blueprintjs/core';
import React, { useState } from 'react';
import todoService from '~modules/todos/services/http';

const TodoCheckbox = ({
	isCompleted,
	id,
	...props
}: {
	isCompleted: boolean;
	id: number;
}): JSX.Element => {
	const [todoCompleteness, setTodoCompleteness] = useState(isCompleted);

	const toggleCompleteness = async (): Promise<void> => {
		setTodoCompleteness(!todoCompleteness);

		await todoService.editCompleteness(id, {
			isCompleted: !todoCompleteness,
		});
	};
	return (
		<Checkbox
			onClick={toggleCompleteness}
			large={false}
			checked={todoCompleteness}
			style={{ marginBottom: 0 }}
			key={id}
			{...props}
		/>
	);
};

export default TodoCheckbox;
