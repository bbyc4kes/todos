import todoService from '@/services/todo.service';
import { NextFunction, Request, Response } from 'express';

const services = {
	todo: todoService,
};

type Services = typeof services;

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
			const service = services[serviceName];
			if (!service) {
				return res
					.status(500)
					.json({ message: `${serviceName} service was not found` });
			}

			if (isNaN(parsedId)) {
				return res
					.status(400)
					.json({ message: 'Entered ID is not valid.' });
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
