import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const listItemStyles: string = css`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: start;
	text-align: start;
	border: solid;
	padding: 2rem;
	width: 500px;
	gap: 2rem;
	height: 300px;
	border-width: 1px;
	border-radius: 8px;
`;

export const titleStyles: string = css`
	font-size: 24px;
	width: 150px;
	margin-bottom: 8px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const descriptionStyles: string = css`
	font-size: 18px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	margin-bottom: 8px;
`;

export const buttonStyles: string = css`
	color: ${colors.whiteX};
	cursor: pointer;
	margin: 6px;
	transition: all 0.3s ease;
	text-align: center;
	border: solid;
	border-width: 1px;

	&:hover {
		background-color: ${colors.brightGreyX};
		color: ${colors.darkBlackX};
		border-radius: 16px;
	}
`;

export const deleteButtonStyles: string = css`
	color: ${colors.whiteX};
	cursor: pointer;
	margin: 6px;
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

export const detailsContainerStyles: string = css`
	display: flex;
	width: 400px;
	height: 300px;
	flex-direction: column;
`;

export const buttonsContainerStyles: string = css`
	display: flex;
	width: 400px;
	flex-direction: column;
`;

export const completenessContainer: string = css`
	display: flex;
	gap: 4px;
`;
