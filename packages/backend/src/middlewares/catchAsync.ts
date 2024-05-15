import { NextFunction, Request, Response } from 'express';

type catchAsyncType = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<Response | undefined>;

type ExpressMiddlewareType = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void>;

const catchAsync = (fn: catchAsyncType): ExpressMiddlewareType => {
	const func: ExpressMiddlewareType = async (req, res, next) => {
		try {
			await fn(req, res, next);
		} catch (error) {
			res.status(500).json({
				message: `Internal Server Error. Error: ${error}`,
			});
			next(error);
		}
	};

	return func;
};

export default catchAsync;
