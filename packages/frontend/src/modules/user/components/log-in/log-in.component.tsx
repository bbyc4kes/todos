import React from 'react';
import { Button } from 'baseui/button';

import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useFormik } from 'formik';
import { useUserStore } from '~store/user/user.store';
import { User } from '~store/user/user.store.types';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	InnerContainer,
	InputWrapper,
	StyledInput,
} from '../sign-in/sign-in.styles';
import { toaster } from '~shared/components/toast/toast.component';

function LogIn(): JSX.Element {
	const navigate = useNavigate();
	const signIn = useSignIn();

	const onSubmit = async (values: User): Promise<void> => {
		await useUserStore.getState().logInUser(values);
		const token = useUserStore.getState().token;

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
			toaster.show({ message: 'Something went wrong logging you in.' });
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
					<h1>Log In!</h1>
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
							shape="pill"
							isLoading={formik.isSubmitting}
						>
							Log In
						</Button>
					</InputWrapper>
				</form>
			</InnerContainer>
		</Container>
	);
}

export { LogIn };
