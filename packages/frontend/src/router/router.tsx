import React from 'react';
import App from '../modules/app/app.module';
import { Route, Routes } from 'react-router-dom';
import TodoDetailsPage from '~modules/todos/containers/todo-details.container';
import NotFound from '~modules/not-found/components/not-found.component';

const Router: React.FunctionComponent = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<App />} />
				<Route path="api/todos/:id" element={<TodoDetailsPage />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
