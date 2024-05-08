import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

export const buttonFormComponentStyle: string = css`
	color: ${THEME.colors.whiteX};
	cursor: pointer;
	margin: ${THEME.sizes.xxxs};
	transition: all 0.3s ease;
	text-align: center;
	border: solid;
	border-width: 1px;

	&:hover {
		background-color: ${THEME.colors.philippineGray};
		color: ${THEME.colors.brightGreyX};
		border-radius: ${THEME.sizes.xs};
	}
`;

export const todoFormContainerStyles: string = css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
`;

export const paragraghTitleStyles: string = css`
	margin: 0;
`;

export const inputContainerStyles: string = css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const checkboxContainerStyles: string = css`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

export const labelContainerStyles: string = css`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 4px;
`;
