import React, { useEffect } from 'react';

import { fetchAllTodos, fetchTodoById } from '~shared/services/todos/http';

const App = (): React.ReactNode => {
	useEffect(() => {
		fetchAllTodos();
		fetchTodoById(2);
	}, []);

	return <></>;
};

export default App;
