import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

export const deleteButtonStyles: string = css`
	color: ${THEME.colors.whiteX};
	cursor: pointer;
	margin: 2px;
	transition: all 0.3s ease;
	text-align: center;
	border: solid;
	border-width: 1px;

	&:hover {
		background-color: ${THEME.colors.brightRedX};
		color: ${THEME.colors.brightGreyX};
		border-radius: ${THEME.sizes.xs};
	}
`;
