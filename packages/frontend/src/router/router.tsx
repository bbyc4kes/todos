import React from 'react';
import App from '../modules/app/app.module';
import { Route, Routes } from 'react-router-dom';
import TodoDetailsPage from '~modules/todos/containers/todo-details/todo-details.container';
import NotFound from '~modules/not-found/components/not-found.component';
import { ROUTER_KEYS } from '~shared/keys';
import TodoListPage from '~modules/todos/containers/todo-list.container';

const Router: React.FunctionComponent = () => {
	return (
		<Routes>
			<Route path={ROUTER_KEYS.ROOT}>
				<Route index element={<App />} />
				<Route
					path={ROUTER_KEYS.TODO_LIST}
					element={<TodoListPage />}
				/>
				<Route
					path={`${ROUTER_KEYS.TODO_LIST}/:id`}
					element={<TodoDetailsPage />}
				/>
			</Route>

			<Route path={ROUTER_KEYS.NOT_FOUND} element={<NotFound />} />
		</Routes>
	);
};

export default Router;
