import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const containerStyles = css`
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	background-color: #f8f9fa;
	border-radius: 8px;
	background: linear-gradient(#f6fff8, #fcfcfc);
`;

export const headingStyles = css`
	font-size: 32px;
	height: 72px;
	font-weight: 700;
	width: 100%;
	background-color: ${colors.darkBlackX};
	text-align: center;
	justify-content: center;
	display: flex;
	align-items: center;
	margin-bottom: 25px;
	color: ${colors.whiteX};
	margin-bottom: 20px;
`;

export const listStyles = css`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, auto);
	gap: 10px;
	padding: 0;
	list-style: none;
`;

export const contentContainer = css`
	display: flex;
	justify-content: center;
	align-items: start;
	width: 100%;
	text-align: center;
	gap: 2rem;
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
	height: 100vh;
	justify-content: center;
`;

export const todosContainerStyles: string = css`
	display: flex;
	flex-direction: column;
`;
