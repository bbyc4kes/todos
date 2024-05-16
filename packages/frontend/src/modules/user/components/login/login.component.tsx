import React from 'react';
import { Button } from 'baseui/button';
import {
	Container,
	InnerContainer,
	InputWrapper,
	StyledInput,
} from './login.styles';

import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useFormik } from 'formik';
import { useUserStore } from '~store/user/user.store';
import { User } from '~store/user/user.store.types';
import { useNavigate } from 'react-router-dom';

function Login(): JSX.Element {
	const navigate = useNavigate();
	const signIn = useSignIn();

	const onSubmit = async (values: User): Promise<void> => {
		console.log('Values: ', values);

		await useUserStore.getState().createUser(values);
		const token = useUserStore.getState().token;

		console.log('token: ', token);

		if (
			signIn({
				auth: {
					token: token,
					type: 'Bearer',
				},
				userState: {
					name: values.name,
					email: values.email,
				},
			})
		) {
			navigate('/');
		} else {
			console.log('Something went wrong.');
		}
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			name: '',
			password: '',
		},
		onSubmit,
	});

	return (
		<Container>
			<InnerContainer>
				<form onSubmit={formik.handleSubmit}>
					<h1>Welcome Back!</h1>
					<InputWrapper>
						<StyledInput
							name="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							placeholder="Name"
							clearOnEscape
							size="large"
							type="text"
						/>
					</InputWrapper>
					<InputWrapper>
						<StyledInput
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							placeholder="Email"
							clearOnEscape
							size="large"
							type="email"
						/>
					</InputWrapper>
					<InputWrapper>
						<StyledInput
							name="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							placeholder="Password"
							clearOnEscape
							size="large"
							type="password"
						/>
					</InputWrapper>
					<InputWrapper>
						<Button
							size="large"
							kind="primary"
							isLoading={formik.isSubmitting}
						>
							Login
						</Button>
					</InputWrapper>
				</form>
			</InnerContainer>
		</Container>
	);
}

export { Login };
