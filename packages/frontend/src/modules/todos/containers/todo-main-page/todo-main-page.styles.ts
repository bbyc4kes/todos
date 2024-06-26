import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

export const containerStyles = css`
	padding-bottom: ${THEME.sizes.s};
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	background-color: ${THEME.colors.chalk};
	border-radius: ${THEME.sizes.xxxs};
	background: linear-gradient(
		${THEME.colors.gradientX},
		${THEME.colors.gradientY}
	);
`;
export const mainContentContainerStyles = css`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	text-align: center;
	width: 100%;
	gap: ${THEME.sizes.xl};
`;
