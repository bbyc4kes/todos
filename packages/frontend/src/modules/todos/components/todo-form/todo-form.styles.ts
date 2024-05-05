import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const buttonFormComponentStyle: string = css`
	color: ${colors.whiteX};
	cursor: pointer;
	margin: 8px;
	transition: all 0.3s ease;
	text-align: center;
	border: solid;
	border-width: 1px;

	&:hover {
		background-color: ${colors.philippineGray};
		color: ${colors.brightGreyX};
		border-radius: 16px;
	}
`;

export const todoFormContainerStyles: string = css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
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
