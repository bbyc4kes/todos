import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

export const tableStyles = css`
	width: 100%;
`;

export const titleColumnStyles = css`
	width: 30%;
`;

export const descriptionColumnStyles = css`
	width: 70%;
`;

export const actionsColumnStyles = css`
	display: flex;
	align-items: center;
	gap: ${THEME.sizes.xs};
`;
