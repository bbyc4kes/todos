import { css } from '@emotion/css';
import { colors } from '~shared/styles';

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
	padding: 0;
`;

export const todosContainerStyles: string = css`
	display: flex;
	flex-direction: column;
`;
