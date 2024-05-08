import React, { useMemo } from 'react';
import { Field, useField } from 'react-final-form';
import { ErrorText, InputWrapper } from './todo-field-input.styles';

const TodoFieledInput = (props): JSX.Element => {
	const initialValues = useMemo(() => {
		return {
			name: props.name,
			initialValue: props.initialValue,
			validate: props.validate,
		};
	}, [props.name, props.initialValue, props.validate]);

	const {
		input,
		meta: { error, touched, submitError },
	} = useField(initialValues.name, {
		initialValue: initialValues.initialValue,
		validate: initialValues.validate,
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
