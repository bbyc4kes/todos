import * as React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import App from '~modules/app/app.module';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="test" element={<h1>testing</h1>}></Route>
		</Route>,
	),
);

const Router: React.FunctionComponent = () => {
	return <RouterProvider router={router} />;
};

export default Router;
