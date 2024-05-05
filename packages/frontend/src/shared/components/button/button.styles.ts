import { css } from '@emotion/css';
import { THEME } from '../../styles';

export const btnStyles = (disabled: boolean): string => {
	return css`
		padding-right: ${THEME.sizes.xs};
		padding-left: ${THEME.sizes.xs};
		padding-top: ${THEME.sizes.xxxs};
		padding-bottom: ${THEME.sizes.xxxs};
		color: ${disabled ? THEME.colors.greyX : THEME.colors.white};
		background-color: ${disabled ? THEME.colors.brightGreyX : THEME.colors.darkBlackX};
		border: none;
		border-color: ${disabled ? THEME.colors.greyX : THEME.colors.darkBlackX}
		border-width: 1px;
		border-radius: ${THEME.sizes.xxxs};
		text-align: center;
		cursor: pointer;
	`;
};

export const btnContentWrapper = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const iconWrapper = css`
	display: flex;
	align-items: center;
`;

export const mr = css`
	margin-right: 15px;
`;
