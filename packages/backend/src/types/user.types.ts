import { Request, Response } from 'express';

export type ExpressUserFunctionType = (
	req: Request,
	res: Response,
) => Promise<Response | undefined>;
