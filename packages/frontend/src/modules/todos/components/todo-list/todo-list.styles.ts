import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

export const headingStyles = css`
	font-size: ${THEME.sizes.xl};
	height: ${THEME.sizes.xxl};
	font-weight: 700;
	width: 100%;
	background-color: ${THEME.colors.darkBlackX};
	text-align: center;
	justify-content: center;
	display: flex;
	align-items: center;
	margin-bottom: 25px;
	color: ${THEME.colors.whiteX};
	margin-bottom: ${THEME.sizes.s};
`;

export const listStyles = css`
	padding: 0;
`;

export const todosContainerStyles: string = css`
	display: flex;
	flex-direction: column;
`;
