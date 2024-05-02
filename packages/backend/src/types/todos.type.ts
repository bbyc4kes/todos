import { Request, Response } from 'express';

export type TodoType = {
	id: number;
	title: string;
	description: string;
	isCompleted: boolean;
	isPublic: boolean;
	userId: number;
	updatedAt?: Date | null;
	createdAt?: Date | null;
};

export type ExpressFunctionType = (
	req: Request,
	res: Response,
) => Promise<Response>;
