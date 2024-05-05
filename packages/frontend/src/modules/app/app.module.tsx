import React from 'react';
import TodoMainPage from '~modules/todos/containers/todo-main-page/todo-main-page.container';
import Layout from '~shared/layouts/layout';

const App = (): React.ReactNode => {
	return (
		<Layout>
			<TodoMainPage />
		</Layout>
	);
};

export default App;
