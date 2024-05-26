import React from 'react';
import styles from './layout.styles';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<>
			<div className={styles.headerContainerStyles}>
				<Link to="/" className={styles.linkNavigationStyles}>
					<h3>TODOLIST</h3>
				</Link>
				<div className={styles.exportLinkContainerStyles}>
					<Link
						to="/register"
						className={styles.linkNavigationStyles}
					>
						Sign In
					</Link>
					<Link to="/login" className={styles.linkNavigationStyles}>
						Login
					</Link>
				</div>
			</div>
			{children}
		</>
	);
};

export default Layout;
