import { css } from '@emotion/css';
import { THEME } from '~shared/styles';

export const listItemStyles: string = css`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: start;
	text-align: start;
	list-style: none;
	border: solid;
	padding: 2rem;
	padding-top: 1.5rem;
	margin: 1rem;
	width: 300px;
	gap: 2rem;
	height: 230px;
	border-width: 1px;
	border-radius: ${THEME.sizes.xxxs};

	@media (min-width: 645px) {
		width: 400px;
		height: 260px;
		align-items: center;
	}
`;

export const titleStyles: string = css`
	font-size: ${THEME.sizes.xs};
	width: 150px;
	margin-bottom: ${THEME.sizes.xxxs};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	@media (min-width: 645px) {
		font-size: ${THEME.sizes.s};
	}
`;

export const descriptionStyles: string = css`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	margin-bottom: ${THEME.sizes.xxxs};

	@media (min-width: 645px) {
		font-size: ${THEME.sizes.s};
	}
`;

export const completedStyles: string = css`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	@media (min-width: 645px) {
		font-size: ${THEME.sizes.s};
	}
`;

export const textStyles: string = css`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	margin-bottom: ${THEME.sizes.xxxs};

	@media (min-width: 645px) {
		font-size: ${THEME.sizes.s};
	}
`;

export const buttonStyles: string = css`
	color: ${THEME.colors.whiteX};
	cursor: pointer;
	margin: 2px;
	transition: all 0.3s ease;
	text-align: center;
	border: solid;
	border-width: 1px;

	&:hover {
		background-color: ${THEME.colors.greyX};
		color: ${THEME.colors.darkBlackX};
		border-radius: ${THEME.sizes.xs};
	}
`;

export const detailsContainerStyles: string = css`
	display: flex;
	width: 150px;
	flex-direction: column;

	@media (min-width: 645px) {
		width: 240px;
		height: 240px;
	}
`;

export const buttonsContainerStyles: string = css`
	display: flex;
	width: 120px;
	flex-direction: column;

	@media (min-width: 645px) {
		width: 240px;
		gap: ${THEME.sizes.xs};
		height: 240px;
	}
`;

export const completenessContainer: string = css`
	display: flex;
	align-items: center;
	justify-content: start;
	gap: ${THEME.sizes.xxxs};
`;
