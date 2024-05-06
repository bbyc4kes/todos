import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

export const mainContainerStyles = css`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	height: 100vh;
`;

export const titleContainerStyles = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
`;

export const paragraphContainerStyles = css`
	display: flex;
	position: relative;
	align-items: center;
	font-size: ${THEME.sizes.s};
	margin-top: ${THEME.sizes.xxxs};
	margin-bottom: ${THEME.sizes.xxxs};
`;

export const headingContainerStyles = css`
	display: flex;
	width: 260px;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: ${THEME.sizes.xxxs};
	font-size: ${THEME.sizes.l};
`;

export const contentContainerStyles = css`
	display: flex;
	flex-direction: column;
	margin-top: 
	gap: ${THEME.sizes.xs};
	justify-content: center;
	align-items: start;
`;

export const buttonGroupContainerStyles = css`
	display: flex;
	flex-direction: row;
	gap: ${THEME.sizes.xs};
	justify-content: center;
	align-items: start;
`;

export const checkboxGroupContainerStyles = css`
	display: flex;
	flex-direction: column;
	gap: ${THEME.sizes.xs};
	justify-content: center;
	align-items: start;
`;
