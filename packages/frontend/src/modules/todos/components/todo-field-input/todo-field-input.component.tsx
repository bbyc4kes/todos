import React from 'react';
import { Field, useField } from 'react-final-form';
import { ErrorText, InputWrapper } from './todo-field-input.styles';

const TodoFieledInput = (props): JSX.Element => {
	const {
		input,
		meta: { error, touched, submitError },
	} = useField(props.name, {
		initialValue: props.initialValue,
		validate: props.validate,
	});

	const inputProps = {
		...props,
		error: touched ? error : undefined,
		...input,
	};
	return (
		<InputWrapper>
			<Field {...inputProps} />
			<ErrorText>
				{touched && (error || submitError) ? error : ''}
			</ErrorText>
		</InputWrapper>
	);
};

export default TodoFieledInput;
