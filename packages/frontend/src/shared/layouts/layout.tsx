import React from 'react';
import { Link } from 'react-router-dom';
import { headingStyles } from '~modules/todos/components/todo-list/todo-list.styles';
import { linkStyles } from './layout.styles';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<>
			<Link to="/" className={linkStyles}>
				<h2 className={headingStyles}>TODOLIST</h2>
			</Link>
			{children}
		</>
	);
};

export default Layout;
