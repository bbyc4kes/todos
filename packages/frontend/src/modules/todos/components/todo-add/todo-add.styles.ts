import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

export const addNewTodoStyles: string = css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
`;

export const newTodoTitleStyles: string = css`
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 1px;
	font-size: ${THEME.sizes.m};
`;

export const addNewTodoContainerStyles: string = css`
	display: flex;
	flex-direction: column;
	height: 30vh;
	margin: 2rem;
	justify-content: start;
`;

export const buttonFormStyles: string = css`
	color: ${THEME.colors.whiteX};
	cursor: pointer;
	transition: all 0.3s ease;
	border: solid;
	align-items: center;
	justify-content: center;
	display: flex;
	width: 90px;
	height: 45px;
	margin-left: 0px;
	margin-top: 0px;
	border-width: 1px;

	&:hover {
		background-color: ${THEME.colors.philippineGray};
		color: ${THEME.colors.brightGreyX};
		border-radius: 16px;
	}
`;
