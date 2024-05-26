import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

const linkContainerStyles = css`
	text-align: center;
	text-decoration: none;
	margin-top: ${THEME.sizes.s};
	margin-right: ${THEME.sizes.s};
	position: absolute;
	text-decoration: none;
	right: 0;
	top: 0;
	display: flex;
	gap: ${THEME.sizes.xxs};
`;

const linkNavigationStyles = css`
	color: ${THEME.colors.whiteX};
	text-decoration: none;
	animation: 1s ease-in-out 0s 1 slideInFromLeft;
	transition: color 0.3s;
	duration: 0.5s;

	&:hover {
		text-decoration: none;
		color: ${THEME.colors.greyX};
	}
`;

const headerContainerStyles = css`
	font-size: ${THEME.sizes.m};
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

export default {
	headerContainerStyles,
	linkNavigationStyles,
	exportLinkContainerStyles: linkContainerStyles,
};
