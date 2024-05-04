import { Icon } from '@blueprintjs/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	buttonContainer,
	buttonStyles,
	container,
	iconStyles,
	title,
} from './not-found.styles';
import { ROUTER_KEYS } from '~shared/keys';
import CustomButton from '~shared/components/button/button.component';
import { ArrowLeftIcon } from 'lucide-react';

const NotFound = (): React.ReactNode => {
	const navigate = useNavigate();

	const handleRedirect = (): void => {
		navigate(`${ROUTER_KEYS.ROOT}`);
	};

	return (
		<div className={container}>
			<h2 className={title}>Oops! Requested page was not found ;(</h2>
			<p>We were unable to find the page you were looking for.</p>
			<div className={buttonContainer}>
				<Icon icon="home" size={30} className={iconStyles} />
				<CustomButton
					icon={<ArrowLeftIcon />}
					text="Back to Homepage"
					onClick={handleRedirect}
					extraButtonStyles={buttonStyles}
				/>
			</div>
		</div>
	);
};
export default NotFound;
