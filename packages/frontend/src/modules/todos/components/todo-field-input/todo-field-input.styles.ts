import styled from '@emotion/styled';
import { THEME } from '~shared/styles';

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const ErrorText = styled.div`
	margin-top: ${THEME.sizes.xxxs};
	color: ${THEME.colors.brightRedX};
	font-size: ${THEME.fontSize.xxs};
	padding: 0px;
	min-height: ${THEME.sizes.s};
`;
