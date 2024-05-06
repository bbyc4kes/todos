import BaseJoi, { ExtensionFactory } from 'joi';
import sanitizeHtml from 'sanitize-html';

const extension: ExtensionFactory = (joi: typeof BaseJoi) => ({
	type: 'string',
	base: joi.string(),
	messages: {
		'string.escapeHTML': '{{#label}} must not include HTML!',
	},
	rules: {
		escapeHTML: {
			validate(value: string, helpers): string {
				const clean = sanitizeHtml(value, {
					allowedTags: [],
					allowedAttributes: {},
				});
				if (clean !== value)
					return helpers.error('string.escapeHTML', { value });
				return clean;
			},
		},
	},
});

const Joi = BaseJoi.extend(extension);

export const todoSchema = Joi.object({
	title: Joi.string().required().escapeHTML().min(0).max(20),
	description: Joi.string().required().escapeHTML().min(0).max(150),
	isPublic: Joi.boolean(),
	isCompleted: Joi.boolean(),
});
