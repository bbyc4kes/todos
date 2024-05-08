import validator from 'validator';

export const validateField = (value: string): string => {
	if (!validator.isLength(value || '', { min: 1, max: 30 })) {
		return 'Input must be from 1 to 30 characters long.';
	}

	if (!validator.isAscii(value || '')) {
		return 'Please provide a valid ASCII input.';
	}

	return '';
};
