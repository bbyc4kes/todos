import React from 'react';
import { headingStyles } from '~modules/todos/components/todo-list/todo-list.styles';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<>
			<a href="/" style={{ textDecoration: 'none' }}>
				<h2 className={headingStyles}>TODOLIST</h2>
			</a>
			{children}
		</>
	);
};

export default Layout;
