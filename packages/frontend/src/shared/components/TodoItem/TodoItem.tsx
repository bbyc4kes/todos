import React, { useEffect } from 'react';
import { fetchTodoById } from '~shared/services/todos/http';

const TodoDetail = ({ id }: { id: number }): React.JSX.Element => {
	useEffect(() => {
		fetchTodoById(id);
	}, []);

	return <div>{/* Render the details of the fetched todo */}</div>;
};

export default TodoDetail;
