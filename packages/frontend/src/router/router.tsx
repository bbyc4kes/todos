import React from 'react';
import App from '../modules/app/app.module';
import { Route, Routes } from 'react-router-dom';
import TodoDetailsPage from '~modules/todos/containers/todo-details/todo-details-page.container';
import NotFound from '~modules/not-found/components/not-found.component';
import { ROUTER_KEYS } from '~shared/keys';
import TodoMainPage from '~modules/todos/containers/todo-main-page/todo-main-page.container';
import { Login } from '~modules/user/components/login/login.component';

const Router: React.FunctionComponent = () => {
	return (
		<Routes>
			<Route path={ROUTER_KEYS.ROOT}>
				<Route index element={<App />} />
				<Route path={ROUTER_KEYS.TODOS} element={<TodoMainPage />} />
				<Route
					path={`${ROUTER_KEYS.TODOS}/:id`}
					element={<TodoDetailsPage />}
				/>
				<Route path={`${ROUTER_KEYS.LOGIN}`} element={<Login />} />
			</Route>

			<Route path={ROUTER_KEYS.NOT_FOUND} element={<NotFound />} />
		</Routes>
	);
};

export default Router;
