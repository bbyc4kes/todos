import { NextFunction, Request, Response } from 'express';

export type TExpressUserFunction = (
	req: Request,
	res: Response,
) => Promise<Response | undefined>;

export type TExpressUserLogoutFunction = (
	req: Request,
	res: Response,
	next: NextFunction,
) => void;

export type TUser = {
	id: number;
	name: string;
	email: string;
	password: string;
};
