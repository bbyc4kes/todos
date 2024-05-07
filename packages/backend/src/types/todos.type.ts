import { Request, Response } from 'express';

export type TodoType = {
	id: number;
	title: string;
	description: string;
	isCompleted: boolean;
	isPublic: boolean;
	userId?: number | null;
	updatedAt: Date;
	createdAt: Date;
};

export type ExpressFunctionType = (
	req: Request,
	res: Response,
) => Promise<Response>;
