import todoService from '@/services/todo.service';
import { NextFunction, Request, Response } from 'express';

type Services = typeof todoService;

const doesExist =
	(serviceName: keyof Services) =>
	async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void | Response> => {
		const { id } = req.params;

		const parsedId = parseFloat(id);
		try {
			const service = todoService;
			if (service[serviceName]) {
				return res
					.status(500)
					.json({ message: `${serviceName} service was not found` });
			}
			const todo = await service.findById(parsedId);
			if (!todo) {
				return res
					.status(404)
					.json({ message: `Todo was not found. Todo id: ${id}` });
			}
			next();
		} catch (error) {
			return res
				.status(500)
				.json({ message: `Internal Server Error. Error: ${error}` });
		}
	};

export default doesExist;
