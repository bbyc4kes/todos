import { css } from '@emotion/css';
import { colors } from '../../styles';

export const btnStyles = (disabled: boolean): string => {
	return css`
		padding-right: 16px;
		padding-left: 16px;
		padding-top: 8px;
		padding-bottom: 8px;
		color: ${disabled ? colors.greyX : colors.white};
		background-color: ${disabled ? colors.brightGreyX : colors.darkBlackX};
		border: none;
		border-color: ${disabled ? colors.greyX : colors.darkBlackX}
		border-width: 1px;
		border-radius: 8px;
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
