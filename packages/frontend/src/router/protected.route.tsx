import { Navigate, Outlet } from 'react-router-dom';
import React, { FC, PropsWithChildren } from 'react';

interface IProtectedRouteProps {
	user: string;
	redirectPath: string;
	children: React.ReactNode;
}

export const ProtectedRoute: FC<PropsWithChildren<IProtectedRouteProps>> = ({
	user,
	redirectPath = '/',
	children,
}) => {
	if (!user) {
		return <Navigate to={redirectPath} replace />;
	}

	return children ? children : <Outlet />;
};
