import React from 'react';
import TodoListPage from '~modules/todos/containers/todo-list.container';
import Layout from '~shared/layouts/layout';

const App = (): React.ReactNode => {
	return (
		<Layout>
			<TodoListPage />
		</Layout>
	);
};

export default App;
