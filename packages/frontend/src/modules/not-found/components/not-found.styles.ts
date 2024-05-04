import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const container = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const iconStyles = css`
	display: flex;
`;

export const buttonStyles = css`
	margin: 8px;
	transition: all 0.3s ease-out;
	&:hover {
		background-color: ${colors.greyX};
	}
`;

export const title = css`
	font-size: 24px;
	margin-bottom: 20px;
	color: #333;
`;

export const paragraghStyles = css`
	font-size: 24px;
	margin-bottom: 20px;
	color: ${colors.greyX};
`;

export const buttonContainer = css`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	color: #333;
`;
