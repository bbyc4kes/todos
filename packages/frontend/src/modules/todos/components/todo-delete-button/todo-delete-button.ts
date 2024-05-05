import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const deleteButtonStyles: string = css`
	color: ${colors.whiteX};
	cursor: pointer;
	margin: 2px;
	transition: all 0.3s ease;
	text-align: center;
	border: solid;
	border-width: 1px;

	&:hover {
		background-color: ${colors.brightRedX};
		color: ${colors.brightGreyX};
		border-radius: 16px;
	}
`;
