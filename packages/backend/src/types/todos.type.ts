import { Request, Response } from 'express';

export type TTodo = {
	id: number;
	title: string;
	description: string;
	isCompleted: boolean;
	isPublic: boolean;
	userId?: number | null;
	updatedAt: Date;
	createdAt: Date;
};

export type TExpressFunction = (
	req: Request,
	res: Response,
) => Promise<Response>;
