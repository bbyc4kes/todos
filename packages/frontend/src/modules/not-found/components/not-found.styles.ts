import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

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
	margin: ${THEME.sizes.xxxs};
	transition: all 0.3s ease-out;
	&:hover {
		background-color: ${THEME.colors.greyX};
	}
`;

export const title = css`
	font-size: ${THEME.sizes.m};
	margin-bottom: ${THEME.sizes.s};
	color: ${THEME.colors.deepRed};
`;

export const paragraghStyles = css`
	font-size: ${THEME.sizes.m};
	margin-bottom: ${THEME.sizes.s};
	color: ${THEME.colors.greyX};
`;

export const buttonContainer = css`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${THEME.sizes.m};
	color: ${THEME.colors.deepRed};
`;
