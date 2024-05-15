import { Joi } from './todo.schema';

export const userSchema = Joi.object({
	email: Joi.string().required().escapeHTML().email(),
	name: Joi.string().required().escapeHTML().min(0).max(20),
	password: Joi.string().required().escapeHTML().min(0).max(15),
});
