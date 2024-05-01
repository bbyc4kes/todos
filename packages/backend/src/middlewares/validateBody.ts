import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateBody = (schema: Joi.Schema) => {
	return (req: Request, res: Response, next: NextFunction): void => {
		const { error } = schema.validate(req.body);

		if (error) {
			const errors = error.details.map((err) => err.message);
			res.status(400).json({ errors });
		} else {
			next();
		}
	};
};

export default validateBody;
