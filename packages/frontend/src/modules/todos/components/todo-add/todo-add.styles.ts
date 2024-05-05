import { css } from '@emotion/css';
import { colors } from '~shared/styles';

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
	font-size: 24px;
`;

export const addNewTodoContainerStyles: string = css`
	display: flex;
	flex-direction: column;
	height: 30vh;
	margin: 2rem;
	justify-content: start;
`;

export const buttonFormStyles: string = css`
	color: ${colors.whiteX};
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
		background-color: ${colors.philippineGray};
		color: ${colors.brightGreyX};
		border-radius: 16px;
	}
`;
